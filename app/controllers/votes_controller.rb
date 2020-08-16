class VotesController < ApplicationController
  skip_before_action :authorized, only: [:vote_and_show]

  def vote_and_show
    vote_and_message = {}
    if logged_in? 
      poll_id = vote_params["poll_id"]
      option_number = vote_params[:option] + 1

      @vote = Vote.find_by(poll_id: poll_id)

      increment_the_count(option_number)
      

      p @vote, "VOTE"

      vote_and_message["voteCount"] = @vote
      vote_and_message["message"] = ""
      render json: vote_and_message
    else 
      vote_and_message["voteCount"] = nil
      vote_and_message["message"] = "Please login to VOTE!!"
      render json: vote_and_message
    end
  end


  def increment_the_count(number)
    puts number, "NUMBER"
    case number
    when 1
      @vote.increment!(:option_1)
    when 2
      @vote.increment!(:option_2)
    when 3
      @vote.increment!(:option_3)
    when 4
      @vote.increment!(:option_4)
    else
      "Invalid input"
    end
  end

  private
    def vote_params
      puts params
      params.require(:vote).permit(:poll_id, :option_1, :option_2, :option_3, :option_4, :option)
    end

end