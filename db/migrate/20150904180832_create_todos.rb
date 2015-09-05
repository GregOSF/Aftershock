class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :desc
      t.string :event

      t.timestamps null: false
      t.references :user
    end
  end
end
