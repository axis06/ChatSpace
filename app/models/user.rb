class User < ApplicationRecord
  has_many :groups, through: :groupusers
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates :name, presence: true
end
