class Answers < ActiveRecord::Base
  validates :title, :question_id, presence: true
  
    
end
