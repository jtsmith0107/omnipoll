json.poll_rooms @poll_rooms.each do |poll_room|
  json.extract! poll_room, :id, :title, :created_at, :updated_at, :current_question

  json.questions poll_room.questions do |question|
    json.extract! question, :id, :title, :created_at, :updated_at
    json.answers question.answers do |answer|
      json.extract! answer, :title, :created_at, :updated_at, :answer_choice_count
	    json.answer_choices answer.answerchoices do |answer_choice|
	      json.extract! answer_choice, :answer_id, :created_at, :updated_at
	    end
    end
  end
end