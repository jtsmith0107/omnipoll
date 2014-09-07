# == Schema Information
#
# Table name: poll_rooms
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  title       :string(255)      not null
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class PollRoomsTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
