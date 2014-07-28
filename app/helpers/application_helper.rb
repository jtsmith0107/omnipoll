module ApplicationHelper
  def switch_question
    # redirect_to root_url
    @question = Question.all.sample

    
    @current_question = Currentquestion.first
  
    @current_question.update({
      current_question_id: @question.id,
      title: @question.title
    })
    
    Pusher['whatever_channel'].trigger('my_event', {
      question: @current_question.to_json
    }) 
  end
  
  def current_question
    @current_question ||= Currentquestion.first
  end

end
