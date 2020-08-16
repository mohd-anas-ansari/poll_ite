class User < ApplicationRecord
  has_many :poll
  has_secure_password
end
