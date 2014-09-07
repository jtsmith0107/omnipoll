# == Schema Information
#
# Table name: questions
#
#  id           :integer          not null, primary key
#  title        :string(255)      not null
#  created_at   :datetime
#  updated_at   :datetime
#  completed    :boolean          default(FALSE)
#  poll_room_id :integer          default(0), not null
#

require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
