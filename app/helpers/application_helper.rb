module ApplicationHelper
  def switch_question
    recycled_question = Question.where('completed = true').first
  
    recycled_question.update_attributes({completed: false})  if recycled_question
    
    @current_question = Currentquestion.first
    # .select('question.*')
    # .joins('questions')
    # .where('question.id = currentquestions.current_question_id')
    # .first

    Question.find(@current_question.current_question_id).update_attributes(completed: true);
    
    @question = Question.where('completed = false').sample
    
    @current_question.update({
      current_question_id: @question.id,
      title: @question.title
    });
    
    Pusher['whatever_channel'].trigger('my_event', {
      question: @current_question.to_json
    }) 
  end
  
  def current_question
    Currentquestion.first
  end

end
