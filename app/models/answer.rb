# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  question_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Answer < ActiveRecord::Base
  validates :title, :question, presence: true

  
  belongs_to :question
  has_many :answerchoices, 
  class_name: :Answerchoice
  
  has_many :users, through: :answerchoices, source: :user
end
