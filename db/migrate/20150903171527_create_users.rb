class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :phone
      t.string :city
      t.string :meeting_place
      t.string :password_digest

      t.timestamps null: false
    end
  end
end
