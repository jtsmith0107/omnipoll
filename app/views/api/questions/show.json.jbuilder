json.extract! @question, :id, :title, :created_at, :updated_at

json.answers @question.answers do |answer|
  json.extract! answer, :id, :title, :created_at, :updated_at
end