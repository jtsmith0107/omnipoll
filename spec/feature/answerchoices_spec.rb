require 'rails_helper'

RSpec.describe "Voting", :type => :model do
  before :each do
    test_man = User.create(email: "test man", password: "saves the day")
    question = Question.create
    
    ApplicationController.sign_in!(test_man)
  end
  
  it "users can only vote once" do
    
  end
  
end