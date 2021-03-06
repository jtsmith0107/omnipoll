require 'rubygems'
require 'clockwork'
require './config/boot'
require './config/environment'


include Clockwork
include ApplicationHelper
  handler do |job|

    puts "Running #{job}"
  end

  # handler receives the time when job is prepared to run in the 2nd argument
  # handler do |job, time|
  #   puts "Running #{job}, at #{time}"
  # end

every(1.minutes, 'switch.question') {QuestionSwitchJob.new.perform}
# every(30.minutes, 'reset_questions') {}