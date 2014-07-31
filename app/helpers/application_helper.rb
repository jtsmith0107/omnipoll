module ApplicationHelper
  def switch_question
    @question = Question.where('completed = false').first
        
    @current_question = Currentquestion.first

    Question.find(@current_question.current_question_id).update_attributes(completed: true);
    
    @current_question.update({
      current_question_id: @question.id,
      title: @question.title
    });
    
    Pusher['whatever_channel'].trigger('my_event', {
      question: @current_question.to_json
    }) 
  end
  
  def current_question
    @current_question ||= Currentquestion.first
  end

end
