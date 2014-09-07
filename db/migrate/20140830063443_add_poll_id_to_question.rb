class AddPollIdToQuestion < ActiveRecord::Migration
  def change
    add_column(:questions, :poll_room_id ,:integer, {default: 0, null: false})
    add_index(:questions, :poll_room_id)
  end
end
