class ApplicationController < ActionController::API
  include ::ActionController::Cookies

  before_action :authorized

  def encode_token(payload)
    JWT.encode(payload, 'the_s3cr3t')
  end

  def auth_header
    # { 'Authorization': 'Bearer <token>' }
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      # headers: { 'Authorization': 'Bearer <token>' }
      begin
        JWT.decode(token, 'the_s3cr3t', true, algorithm: 'HS256')
      # JWT.decode => [{ "beef"=>"steak" }, { "alg"=>"HS256" }]
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def logged_in_user
    if decoded_token
      # decoded_token=> [{"user_id"=>2}, {"alg"=>"HS256"}]
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!logged_in_user
  end

  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end

  def render_user_json(user, token, message)
    options = {
      include: %i[assigned_tasks completed_tasks earned_badges]
    }

    render json: {
             user: UserSerializer.new(user, options),
             jwt: token,
             message: message,
             quote: quote_of_day
           },
           status: :created
  end

  def render_invalid_login_json
    render json: {
      message: 'Invalid Login',
      jwt: ''
    },
    status: :unauthorized
  end

  def update_badge(user)
    applicable_badges = Badge.all.select { |badge| user.score >= badge.score_threshold }
    applicable_badges.each do |badge|
      EarnedBadge.create(user_id: user.id, badge_id: badge.id) if user.badges.exclude?(badge)
    end
  end

  def quote_of_day
    activeQuote = Quote.all.select { |quote| quote.active == true }
    activeQuote[0]
  end

  def setup_authorized_user(user, token)
    if user
      user.assign_daily_tasks
      user.calc_score
      update_badge(user)
      assign_quote_of_day
      token = encode_token({ user_id: @user.id })
      render_user_json(user, token, 'Valid Login')
    else
      render_invalid_login_json
    end
  end
end
