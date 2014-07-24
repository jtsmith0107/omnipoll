class CreateAnswerchoices < ActiveRecord::Migration
  def change
    create_table :answerchoices do |t|
      t.integer :answer_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index(:answerchoices, [:answer_id, :user_id], unique: true)
  end
end
