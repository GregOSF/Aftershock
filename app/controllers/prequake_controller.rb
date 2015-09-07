class PrequakeController < ApplicationController

  def index
    @prequakeseed_todos = Preseed.where("event = 'Prequake'")
    render :index    
  end

  def new
    @prequake_todo = Todo.new
    render :new
  end

  
  def create
    if current_user
      @prequake_todo = Todo.create(prequake_params)
      redirect_to prequakelist_path
    else
      redirect_to login_path
    end
  end

  def show

  end

  def edit
    @user = current_user
    @prequake_todo = Todo.find(params[:id])
    if current_user.todos.include? @todo
      render :edit
    else 
      session[:user_id] = nil
      redirect_to profile_path
    end
  end

  def update
    @user = current_user
    prequake_todo = Todo.find(params[:id])
    if current_user.todos.include? story
      todo.update_attributes(prequake_params)
      redirect_to prequake_index_path
    else
      redirect_to profile_path
    end
  end

  def destroy
    @user = current_user
    prequake_todo = Todo.find(params[:id])
    prequake_todo.destroy
    redirect_to profile_path
    
  end


  private
    def prequake_params
      params.require(:todo).permit(:desc, :event)
    end
end
