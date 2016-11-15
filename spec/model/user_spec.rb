require 'rails_helper'
describe User do
  describe '#create' do
    it "is invalid without a nickname" do
      user = User.new(name: "", email: "admin@example.com", password: "00000000", password_confirmation: "00000000")
      user.valid?
      expect(user.errors[:name]).to include("名前に空白は利用できません")
    end
  end
end
