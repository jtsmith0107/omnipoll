class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :title, null: false
      t.integer :question_id, null: false
      t.timestamps
    end
    
    add_index(:answers, :title, unique: true)
    add_index(:answers, :question_id)
  end
end
