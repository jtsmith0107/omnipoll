class Api::QuestionsController < ApplicationController
  def create
    @question = Question.new(question_params)
    @question.answers.new(answer_params)
    if @question.save
      render json: @question
    else
      render json: @question.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @question = Question.find(params[:id])

    @question.try(:destroy)
    render json: {}
  end

  def show
    @question = Question.find(params[:id])
    @current_user = current_user

    render :show
  end

  # Only needed for potential previous pol'ls view
  def index
    if params[:completed]
       @questions = Question
           .joins(:answers)
           .where('completed = ?', true)
           .group('questions.id')
    else
       @questions = Question.joins(:answers).all
    end
    render json: @questions.as_json( include: { :answers => { include: [:answerchoices]} } )
  end

  private

  def question_params
    params.require(:question).permit(:title)
  end
  
  def answer_params
    params.permit(:answers => [:title])
           .require(:answers)
           .reject { |data| data == '' }
  end

end
