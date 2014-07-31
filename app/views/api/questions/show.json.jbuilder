json.extract! @question, :id, :title, :created_at, :updated_at

json.answers @question.answers do |answer|
  json.extract! answer, :id, :title, :created_at, :updated_at, :answer_choice_count
  json.answer_choices answer.answerchoices do |answer_choice|
    json.extract! answer_choice, :user_id, :answer_id, :created_at, :updated_at
  end
end
if signed_in?
  json.signed_in true
end