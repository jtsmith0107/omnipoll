class AnswersController < ApplicationController
  def show
    @answer = Answer.find(params[:id])  
    
    render json: @answer
  end
  
  def index
    @answers = Answer.all
    
    render json: @answers
  end

  def create
    @answer = Answer.new(answer_params)
    
    if @answer.save
      render :json => @answer
    else
      render :json => @answer.errors.full_messages
    end
  end
  

end
