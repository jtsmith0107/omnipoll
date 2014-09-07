class Api::PollRoomsController < ApplicationController
  def show
    @poll_room = PollRoom.find(params[:id])
    
    render :show
  end
  
  def create
    @poll_room = PollRoom.new(poll_rooms_params)
    @poll_room.answers.new(answer_params)
    if @poll_room.save
      render json: @poll_room
    else
      render json: @poll_room.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def destroy
    @poll_room = PollRoom.find(params[:id])

    @poll_room.try(:destroy)
    render json: {}
  end
  
  def index
    @poll_rooms =  PollRoom.joins('LEFT OUTER JOIN questions ON questions.id = poll_rooms.question_id LEFT OUTER JOIN answers ON answers.question_id = questions.id')
    .group('poll_rooms.id')
                  
    render :index
  end
  
  def poll_rooms_params
    params.require(:poll_room).permit(:title, :current_question_id)
  end
  
end
