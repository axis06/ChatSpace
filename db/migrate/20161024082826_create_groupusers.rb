class CreateGroupusers < ActiveRecord::Migration[5.0]
  def change
    create_table :groupusers do |t|
      t.integer :user_id,  null: false
      t.integer :group_id, null: false

      t.timestamps
    end
    add_index :groupusers, :user_id
    add_index :groupusers, :group_id
  end
end
