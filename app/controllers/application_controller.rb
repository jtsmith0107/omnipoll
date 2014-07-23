class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  helper_method :signed_in?, :current_user
  
  def sign_in!(user)
    session
  end
  
  def current_user
    User.find_by_session_token(session[:token])
  end
  
  def signed_in?
    !!current_user
  end
  
  def sign_out?
    current_user.try(:reset_token)
    session[:token] = nil
  end
    
  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end
end
