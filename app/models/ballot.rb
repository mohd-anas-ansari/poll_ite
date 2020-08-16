class Ballot < ApplicationRecord
  belongs_to :user
  belongs_to :poll
end
