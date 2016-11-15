require 'rails_helper'
describe User do
  describe '#create' do
    it "is valid with a nickname, email, password, password_confirmation" do
      user = build(:user)
      expect(user).to be_valid
    end


    it "is invalid without a nickname" do
      user = build(:user, name: nil)
      user.valid?
      expect(user.errors[:name]).to include("名前に空白は利用できません")
    end

    it "is invalid without a email" do
      user = build(:user, email: nil)
      user.valid?
      expect(user.errors[:email]).to include("メールアドレスに空白は利用できません")
    end
    it "is invalid without a password" do
      user = build(:user, password: nil)
      user.valid?
      expect(user.errors[:password]).to include("パスワードに空白は利用できません")
    end
    it "is invalid with a duplicate email address" do
      user = create(:user)
      another_user = build(:user, email: user.email)
      another_user.valid?
      expect(another_user.errors[:email]).to include("すでにそのメールアドレスは利用されてます")
    end
  end
end
