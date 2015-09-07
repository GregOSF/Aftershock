class CreateStatictodos < ActiveRecord::Migration
  def change
    create_table :statictodos do |t|
      t.text :static_todo

      t.timestamps null: false
    end
  end
end
