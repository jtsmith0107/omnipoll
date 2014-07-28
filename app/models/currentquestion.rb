class Currentquestion < ActiveRecord::Base
  validates :current_question_id, :title, presence: true
end
