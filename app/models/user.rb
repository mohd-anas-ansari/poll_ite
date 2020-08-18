class User < ApplicationRecord
  has_many :poll
  has_many :ballot
  has_secure_password
end
