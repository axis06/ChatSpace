class Group < ApplicationRecord
  has_many :users, through: :groupusers
  has_many :messages
end
