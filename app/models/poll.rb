class Poll < ApplicationRecord
  belongs_to :user
  serialize :options, Array
end
