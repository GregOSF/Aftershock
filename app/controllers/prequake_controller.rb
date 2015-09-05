class PrequakeController < ApplicationController

  def index
    @prequake_todos = Todo.where("event = 'Prequake'")
    render :index    
  end

  def new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
