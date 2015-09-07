class PostquakeController < ApplicationController
  
  def index
    @postquakeseed_todos = Preseed.where("event = 'Postquake'")
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
