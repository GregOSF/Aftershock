class AddContactNumToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :contact_num, :string
  end
end
