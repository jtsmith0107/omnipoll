class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.integer :poll_room_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index(:memberships, [:poll_room_id, :user_id], unique: true)
  end
end
