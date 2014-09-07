# == Schema Information
#
# Table name: poll_rooms
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  title       :string(255)      not null
#  created_at  :datetime
#  updated_at  :datetime
#

class PollRoom < ActiveRecord::Base
  validates :question_id, :title, presence: true
  
  belongs_to :current_question,
  foreign_key: :question_id,
  class_name: "Question"
  
  has_many :questions,
  foreign_key: :poll_room_id
  
  has_many :memberships
  
end
