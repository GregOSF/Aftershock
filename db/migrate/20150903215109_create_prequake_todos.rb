class CreatePrequakeTodos < ActiveRecord::Migration
  def change
    create_table :prequake_todos do |t|
      t.string :todo

      t.timestamps null: false

      t.references :user
    end
  end
end
