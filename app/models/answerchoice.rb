# == Schema Information
#
# Table name: answerchoices
#
#  id         :integer          not null, primary key
#  answer_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Answerchoice < ActiveRecord::Base
  belongs_to :answer, counter_cache: :answer_choice_count
  belongs_to :user
end
