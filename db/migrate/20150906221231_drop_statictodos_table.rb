class DropStatictodosTable < ActiveRecord::Migration
  def up
	    drop_table :statictodos
	  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
