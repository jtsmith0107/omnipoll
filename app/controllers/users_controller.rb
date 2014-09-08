class UsersController < ApplicationController
  def new
    render :new
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end  
  
  
  def guest
    guest_name = "Guest #{User.last.id + 1}"
    @guest = User.new({email: guest_name, password: 'guest'})
    
    if @guest.save
      sign_in!(@guest)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
    
end
