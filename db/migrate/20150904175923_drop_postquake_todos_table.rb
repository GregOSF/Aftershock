class DropPostquakeTodosTable < ActiveRecord::Migration
	def up
	    drop_table :postquake_todos
	  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
