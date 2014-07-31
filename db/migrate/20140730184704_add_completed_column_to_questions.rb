class AddCompletedColumnToQuestions < ActiveRecord::Migration
  def change
    add_column(:questions, :completed, :boolean)
  end
end
