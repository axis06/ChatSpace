class CreateGroupsuers < ActiveRecord::Migration[5.0]
  def change
    create_table :groupsuers do |t|
      t.integer :user_id,  null: false
      t.integer :group_id, null: false

      t.timestamps
    end
    add_index :groupsuers, :user_id
    add_index :groupsuers, :group_id
  end
end
