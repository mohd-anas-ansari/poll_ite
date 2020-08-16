class VotesController < ApplicationController

  def vote_and_show
    poll_id = vote_params["poll_id"]

    vote = Vote.find_by(poll_id: poll_id)
    vote.update(vote_params)

    render json: vote
  end


  private
    def vote_params
      puts params
      params.require(:vote).permit(:poll_id, :option_1)
    end

end