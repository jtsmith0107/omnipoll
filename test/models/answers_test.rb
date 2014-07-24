# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  question_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class AnswersTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
