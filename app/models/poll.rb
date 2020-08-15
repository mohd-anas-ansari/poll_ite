class Poll < ApplicationRecord
  serialize :options, Array
end
