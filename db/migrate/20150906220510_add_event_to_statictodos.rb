class AddEventToStatictodos < ActiveRecord::Migration
  def change
  	add_column :Statictodos, :event, :string
  end
end
