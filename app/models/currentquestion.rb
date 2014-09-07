# == Schema Information
#
# Table name: currentquestions
#
#  id                  :integer          not null, primary key
#  current_question_id :integer          default(3), not null
#  title               :string(255)
#  created_at          :datetime
#  updated_at          :datetime
#

class Currentquestion < ActiveRecord::Base
  validates :current_question_id, :title, presence: true
end
