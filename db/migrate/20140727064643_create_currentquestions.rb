class CreateCurrentquestions < ActiveRecord::Migration
  def change
    create_table :currentquestions do |t|
      t.integer :current_question_id, default: 3, null: false
      t.string :title
      t.timestamps
    end
  end
end
