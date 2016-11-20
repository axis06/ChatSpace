class Group < ApplicationRecord
  has_many :groupusers, dependent: :destroy
  has_many :users, through: :groupusers
  has_many :messages
  accepts_nested_attributes_for :groupusers, allow_destroy: true
end
