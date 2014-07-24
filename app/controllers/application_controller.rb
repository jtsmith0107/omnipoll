class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  helper_method :signed_in?, :current_user, :current_question
  
  def sign_in!(user)
    @current_user = user
    session[:token] = user.reset_token!
  end
  
  def current_user
    return nil unless session[:token]
    @current_user ||= User.find_by_session_token(session[:token])
  end
  
  def signed_in?
    !!current_user
  end
  
  def sign_out!
    current_user.try(:reset_token)
    session[:token] = nil
  end
    
  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end
  
  def current_question
    if(session[:current_question_id])
      Question.find(session[:current_question_id])
    else
      q = Question.all.sample
      session[:current_question_id] = q.id
      q
    end
  end
  
  
  #from delayed_job gem, should continuously run, and sample a new question
  def switch_question
    20.seconds.from_now
    session[:current_question_id] = Question.all.sample.id
  end
  
  handle_asynchronously :switch_question
end
