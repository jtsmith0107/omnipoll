class CreatePollRooms < ActiveRecord::Migration
  def change
    create_table :poll_rooms do |t|
      t.integer :question_id, null: false
      t.string :title, null: false
      t.timestamps
    end
    add_index(:poll_rooms, :question_id)
  end
end
