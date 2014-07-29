# == Schema Information
#
# Table name: answerchoices
#
#  id         :integer          not null, primary key
#  answer_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Answerchoice < ActiveRecord::Base
  validates :user_id, :answer_id, presence: true
  validates :user_id, :uniqueness => {:scope => :answer_id}
  belongs_to :answer, counter_cache: :answer_choice_count
  belongs_to :user
end
