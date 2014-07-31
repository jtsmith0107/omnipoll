class AddDefaultToCompletedBoolean < ActiveRecord::Migration
  def change
    change_column(:questions, :completed, :boolean, default: false)
  end
end
