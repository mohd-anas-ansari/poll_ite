class VotesController < ApplicationController
  skip_before_action :authorized, only: [:vote_and_show]

  def vote_and_show
    vote_message_ballot = {}
    if logged_in? 
      poll_id = vote_params["poll_id"]
      option_number = vote_params[:option] + 1

      @vote = Vote.find_by(poll_id: poll_id)
      increment_the_count(option_number)
      
      ballot = Ballot.create(user_id: session[:user_id], poll_id: poll_id, voted_option: option_number)     

      vote_message_ballot["voteCount"] = @vote
      vote_message_ballot["message"] = ""
      vote_message_ballot["ballot"] = ballot
      render json: vote_message_ballot
    else 
      vote_message_ballot["voteCount"] = nil
      vote_message_ballot["ballot"] = nil
      vote_message_ballot["message"] = "Please login to VOTE!!"
      render json: vote_message_ballot
    end
  end

  def increment_the_count(number)
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

  def show_vote_count_and_ballot_where_user_participated
    @ballot = Ballot.find_by(user_id: current_user[:id], poll_id: params[:id])
    
    if @ballot.present?
      @vote = Vote.find(params[:id])
      render json: [@ballot, @vote]
    end
  end

  private
    def vote_params
      puts params
      params.require(:vote).permit(:poll_id, :option_1, :option_2, :option_3, :option_4, :option)
    end

end