# == Schema Information
#
# Table name: memberships
#
#  id           :integer          not null, primary key
#  poll_room_id :integer          not null
#  user_id      :integer          not null
#  created_at   :datetime
#  updated_at   :datetime
#

class Membership < ActiveRecord::Base
  validates :user_id, :poll_room_id, presence: true
  
  belongs_to :poll_room
  belongs_to :user
end
