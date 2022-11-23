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

  def render_user_json(user, token)
    options = {
      include: %i[assigned_tasks completed_tasks earned_badges]
    }

    render json: {
             user: UserSerializer.new(user, options),
             jwt: token,
             message: 'Valid Login'
           },
           status: :created
  end
end
