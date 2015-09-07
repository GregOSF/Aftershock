class CreateStaticTodos < ActiveRecord::Migration
  def change
    create_table :static_todos do |t|
      t.text :desc
      t.string :event

      t.timestamps null: false
    end
  end
end
