module ApplicationHelper
  def switch_question
    # redirect_to root_url
      next_question = Question.all.sample.id
      debugger
      # session[:current_question_id] = next_question.id
      Pusher['whatever_channel'].trigger('my_event', {
        question: next_question.to_json
      });
  end

  def current_question 
    current_question ||= 3
  end
end
