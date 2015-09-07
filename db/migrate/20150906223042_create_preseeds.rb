class CreatePreseeds < ActiveRecord::Migration
  def change
    create_table :preseeds do |t|
      t.text :desc
      t.string :event

      t.timestamps null: false
    end
  end
end
