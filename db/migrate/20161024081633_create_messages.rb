class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :body
      t.string :body
      t.integer :user_id,  null: false
      t.integer :group_id, null: false

      t.timestamps
    end
    add_index :messages, :user_id
    add_index :messages, :group_id
  end
end
