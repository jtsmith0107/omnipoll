# == Schema Information
#
# Table name: memberships
#
#  id           :integer          not null, primary key
#  poll_room_id :integer          not null
#  user_id      :integer          not null
#  created_at   :datetime
#  updated_at   :datetime
#

require 'test_helper'

class MembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
