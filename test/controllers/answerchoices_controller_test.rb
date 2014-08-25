require 'test_helper'

class AnswerchoicesControllerTest < ActionController::TestCase
  test "should get create" do
    get :create
    assert_response :success
  end

  test "should get destroy" do
    get :destroy
    assert_response :success
  end

  test "should get update" do
    get :update
    assert_response :success
  end
  
  def test_user_unique_answer
    
    json = {
      "id":33,
      "answer_id":22,
      "user_id":30,
      "created_at":"2014-08-15T06:48:32.263Z",
      "updated_at":"2014-08-15T06:48:32.263Z"}
    post :create, json
  end

end
