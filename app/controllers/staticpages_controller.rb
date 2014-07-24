class StaticpagesController < ApplicationController
  
  def root
    @question = current_question
    render :root
  end
end
