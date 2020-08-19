class PollsController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index
    @polls = Poll.all.order("created_at DESC")
    
  end

  def new
  end

  def create
    @poll = Poll.create(user_id: current_user.id, 
                        question: poll_params[:question], 
                        options: poll_params[:options])
                        
    @vote = Vote.create(poll_id: @poll.id)
  end

  def show
  end

  private
    def poll_params
      puts params
      params.require(:poll).permit(:question, options:[])
    end

end








# What is the difference between :options and options: . How can poll_params can take both