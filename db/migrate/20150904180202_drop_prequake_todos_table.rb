class DropPrequakeTodosTable < ActiveRecord::Migration
  def up
	    drop_table :prequake_todos
	  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
