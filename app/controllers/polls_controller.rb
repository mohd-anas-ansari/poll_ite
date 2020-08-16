class PollsController < ApplicationController
  skip_before_action :authorized, only: [:index]
  def index
    @polls = Poll.all
  end

  def new
  end

  def create
    @poll = Poll.create(poll_params)
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
