class PostquakeController < ApplicationController
  
  before_filter :authorize, except: [:index, :show]

  def index
    @postquakeseed_todos = Preseed.where("event = 'Postquake'")
    if current_user
      @todos = current_user.todos.where("event = 'Postquake'")
      render :index    
    else
      render :index
    end
  end

  def new
    @postquake_todo = Todo.new
    render :new
  end

  
  # def create
  #   if current_user
  #     @postquake_todo = Todo.create(postquake_params)
  #     redirect_to postquakelist_path
  #   else
  #     redirect_to login_path
  #   end
  # end

  def create
    if current_user
      postquake_todo = current_user.todos.new(postquake_params)
      postquake_todo.save
      redirect_to postquakelist_path
    else
      redirect_to login_path
    end
  end

  def show

  end

  def edit
    @user = current_user
    @postquake_todo = Todo.find(params[:id])
    if current_user.todos.include? @todo
      render :edit
    else 
      session[:user_id] = nil
      redirect_to profile_path
    end
  end

  def update
    @user = current_user
    postquake_todo = Todo.find(params[:id])
    if current_user.todos.include? story
      todo.update_attributes(postquake_params)
      redirect_to postquake_index_path
    else
      redirect_to profile_path
    end
  end

  def destroy
    @user = current_user
    postquake_todo = Todo.find(params[:id])
    postquake_todo.destroy
    redirect_to profile_path
    
  end


  private
    def postquake_params
      params.require(:todo).permit(:desc, :event)
    end
end
