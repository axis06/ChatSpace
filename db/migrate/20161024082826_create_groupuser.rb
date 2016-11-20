class CreateGroupuser < ActiveRecord::Migration[5.0]
  def change
    create_table :groupuser do |t|
      t.integer :user_id,  null: false
      t.integer :group_id, null: false

      t.timestamps
    end
    add_index :groupuser, :user_id
    add_index :groupuser, :group_id
  end
end
