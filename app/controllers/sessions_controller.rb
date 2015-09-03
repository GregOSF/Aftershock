class SessionsController < ApplicationController
  # Login Form
  def new	
  	if current_user
  		redirect_to profile_path
  	else
  		render :new
  	end
  end
  # Authenticate for user, set session, redirect
  def create
  	user=User.find_by_username(user_params[:username])
  	if user && user.authenticate(user_params[:password])
  	   session[:user_id]=user.id
  	   redirect_to profile_path
  	else
      flash[:error] = "Failed To Authenticate. Please try again."
  		redirect_to login_path
  	end
  end
  # Clear session (log out user)
  def destroy
  	session[:user_id]= nil
  	redirect_to root_path
  end

  private
  	def user_params
  		params.require(:user).permit(:username, :password)
  	end
end
