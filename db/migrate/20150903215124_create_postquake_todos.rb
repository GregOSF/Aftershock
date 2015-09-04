class CreatePostquakeTodos < ActiveRecord::Migration
  def change
    create_table :postquake_todos do |t|
      t.string :todo

      t.timestamps null: false

      t.references :user
    end
  end
end
