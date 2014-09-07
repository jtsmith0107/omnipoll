json.extract! @poll_room, :id, :title, :created_at, :updated_at
json.current_question @poll_room.current_question, :id, :title, :created_at, :updated_at, :answers


json.questions @poll_room.questions do |question|
  json.extract! question, :id, :title, :created_at, :updated_at
  json.answers question.answers do |answer|
    json.extract! answer, :title, :created_at, :updated_at, :answer_choice_count
    json.answer_choices answer.answerchoices do |answer_choice|
      json.extract! answer_choice, :user_id, :answer_id, :created_at, :updated_at
    end
  end
end