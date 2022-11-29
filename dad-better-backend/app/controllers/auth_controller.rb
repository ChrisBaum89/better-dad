class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    jwt_token = decoded_token
    if !jwt_token.nil?
      login_jwt()
    else
      login_username_password(user_params[:username], user_params[:password])
    end
  end

  def login_jwt
    decoded_jwt = decoded_token()
    user_id = decoded_jwt[0]['user_id']
    @user = User.find_by_id(user_id)
    token = ''
    setup_authorized_user(@user, token)
  end

  def login_username_password(username, password)
    @user = User.find_by(username: username)
    if @user && @user.authenticate(password)
      # encode token comes from ApplicationController
      token = encode_token({ user_id: @user.id })
      cookies.signed[:jwt] = { value: token, httponly: true, expires: 1.hour.from_now }
      setup_authorized_user(@user, token)
    end
  end

  def assign_quote_of_day
    activeQuote = quote_of_day
    unless quote_assigned_today?(activeQuote)
      reset_quote_of_day(activeQuote)
      assign_new_quote(activeQuote)
    end
  end

  def quote_assigned_today?(quote)
    current_date = DateTime.now.in_time_zone('Eastern Time (US & Canada)').to_date
    quote.updated_at.to_date == current_date
  end

  def assign_new_quote(last_active_quote)
    random_quote_id = rand(1..Quote.all.length)
    if random_quote_id != last_active_quote.id
      quote = Quote.find_by_id(random_quote_id)
      quote.active = true
      quote.save
    else
      assign_new_quote(last_active_quote)
    end
  end

  def reset_quote_of_day(quote)
    quote.active = false
    quote.save
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :message, :jwtToken)
  end
end
