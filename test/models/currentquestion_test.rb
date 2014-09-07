# == Schema Information
#
# Table name: currentquestions
#
#  id                  :integer          not null, primary key
#  current_question_id :integer          default(3), not null
#  title               :string(255)
#  created_at          :datetime
#  updated_at          :datetime
#

require 'test_helper'

class CurrentquestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
