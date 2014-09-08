# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([{email: 'batman@batman.com', password: 'batman'}, {email: 'sonic@sonic.com', password: 'sonic'}])

question1 = Question.create({title: 'What is your favorite method of Crime Fighting?'})
question2 = Question.create({title: "What's the best video game system?"})

q1_answers = Answer.create([{title: 'Vigilantism', question_id: question1.id},
              {title: 'Traditional Police Work', question_id: question1.id}])

q2_answers = Answer.create([{title: 'Atari Jaguar', question_id: question2.id},
              {title: 'SNES', question_id: question2.id}]);

poll_room = PollRoom.create({title: 'Superhero Room', question_id: 1})

current_question = Currentquestion.create({title: 'What is your favorite method of Crime Fighting?', current_question_id: question1.id});
