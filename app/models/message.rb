class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  mount_uploader :image, ImageUploader
  
  validate :post_all_nil

  def post_all_nil
    if body.empty? && image.blank?
      errors.add(:body, ": 画像または文章を送信してください")
    end
  end
end
