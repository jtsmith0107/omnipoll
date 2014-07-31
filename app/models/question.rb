# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#

class Question < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true
  
  has_many :answers
  has_many :answerchoices, through: :answers, source: :answerschoices
  
  
  def switch_question
    # redirect_to root_url
      next_question = Question.all.sample.id
      # session[:current_question_id] = next_question.id
      Pusher['whatever_channel'].trigger('my_event', {
        question: next_question.to_json
      });
  end

  
  handle_asynchronously :switch_question, run_at: Proc.new {20.seconds.from_now}
end
