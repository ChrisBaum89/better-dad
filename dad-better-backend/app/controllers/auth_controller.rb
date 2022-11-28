class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.find_by(username: user_params[:username])

    # User#authenticate comes from BCrypt
    if @user && @user.authenticate(user_params[:password])
      # encode token comes from ApplicationController
      token = encode_token({ user_id: @user.id })
      cookies.signed[:jwt] = {value: token, httponly: true, expires: 1.hour.from_now}
      @user.assign_daily_tasks
      @user.calc_score
      update_badge(@user)
      assign_quote_of_day()

      options = {
        include: [:assigned_tasks, :completed_tasks, :earned_badges]
      }

      render json: {
               user: UserSerializer.new(@user, options),
               jwt: token,
               message: 'Valid Login',
               quote: quote_of_day(),
             },
             status: :accepted
    else
      render json: {
               message: 'Invalid Login'
             },
             status: :unauthorized
    end
  end

  def assign_quote_of_day
    activeQuote = quote_of_day()
    if not quote_assigned_today?(activeQuote)
      reset_quote_of_day(activeQuote)
      assign_new_quote(activeQuote)
    end
  end

  def quote_assigned_today?(quote)
    current_date = DateTime.now.in_time_zone("Eastern Time (US & Canada)").to_date
    return quote.updated_at.to_date == current_date
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
    params.require(:user).permit(:username, :password)
  end
end
