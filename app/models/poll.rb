class Poll < ApplicationRecord
  belongs_to :user
  serialize :options, Array

  # def self.released
  #   where("created_at < ?", Time.now).order("created_at")
  # end
end
