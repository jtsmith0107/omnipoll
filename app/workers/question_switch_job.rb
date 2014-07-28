require 'rubygems'
require 'delayed_job'

# require File.expand_path("../environment", __FILE__)


class QuestionSwitchJob
  include ApplicationHelper
  def perform
    switch_question
  end
end
