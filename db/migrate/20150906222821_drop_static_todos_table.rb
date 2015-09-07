class DropStaticTodosTable < ActiveRecord::Migration
  def up
	    drop_table :static_todos
	  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
