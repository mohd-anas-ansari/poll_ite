class PollsController < ApplicationController
  def index
    @polls = Poll.all
  end

  def new
  end

  def create
    @poll = Poll.create(poll_params)
  end

  def show
  end


  private
    def poll_params
      puts params
      params.require(:poll).permit(:question, options:[])
    end

end
