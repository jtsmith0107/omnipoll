class StaticpagesController < ApplicationController
  
  def root
    @question = current_question
  end
end
