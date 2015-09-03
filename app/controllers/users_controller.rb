class UsersController < ApplicationController
  before_filter :authorize, only: [:show]
	
  def new
    if current_user
      redirect_to profile_path
    else
	    @user = User.new
	    render :new
    end
  end

  def create
    if current_user
      redirect_to profile_path
    else 
      user=User.new(user_params)
	  	if user.save 
	  		session[:user_id] = user.id
	  		redirect_to profile_path
	  	else
	  		redirect_to signup_path
	  	end
    end	
  end

  def show
    render :show
  end

  def edit
    user_id = current_user.id
    @user = User.find(user_id)
    render :edit
    
  end

  def update
    user_id = current_user.id
    @user = User.find(user_id)
    @user.update_attributes(user_params)
    redirect_to profile_path
  end

  private
      def user_params
        params.require(:user).permit(:username, :email, :phone, :city, :meeting_place, :password)
      end
end
