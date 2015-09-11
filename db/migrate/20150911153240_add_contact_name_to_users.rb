class AddContactNameToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :contact_name, :string
  end
end
