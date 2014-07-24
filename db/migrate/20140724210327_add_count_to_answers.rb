class AddCountToAnswers < ActiveRecord::Migration
  def change
    add_column(:answers, :answer_choice_count, :integer, default: 0, null: false)
  end
  
end
