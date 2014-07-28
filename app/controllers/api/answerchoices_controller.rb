class Api::AnswerchoicesController < ApplicationController
  def create
    if signed_in?
      @answer_choice = Answerchoice.new(answer_choice_params)
      @answer_choice.user_id = current_user.id
   end

    if @answer_choice && @answer_choice.save
     render :json => @answer_choice
   else
     if @answer_choice
       render :json => @answer_choice.errors.full_messages, status: :unprocessable_entity
     else
       render :json => ["You are not logged in!"], status: :unprocessable_entity
     end
   end
  end

  def destroy
    @answer_choice = Answerchoice.find(params[:id])

    @answer_choice.try(:destroy)
    render json: {}
  end

  def update
  end
  
  def answer_choice_params
    params.require(:answerchoice).permit(:answer_id)
  end
end
