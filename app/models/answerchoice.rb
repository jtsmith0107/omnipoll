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
  # validates :user_id, :uniqueness => {scope: :question}
  validate :one_answer_to_question
  # validates_presence_of :user, :answer
  
  def one_answer_to_question
    unless ((Question
      .joins(answers: :answerchoices)
      .where('answerchoices.user_id = ?', self.user_id )
      .where('questions.id = ?', self.question.id).count) < 1)
      
      errors.add(:question, 'Can only answer a question once')
    end
  end
  
  belongs_to :answer, counter_cache: :answer_choice_count
  belongs_to :user
  has_one :question, through: :answer, source: :question
end
