class MessagesController < ApplicationController
  before_action :set_group, only: [:create]

  def create
    @message = Message.new(message_params)

    respond_to do |format|
      if @message.save
        format.html { redirect_to :back}
        format.json { render action: 'show', status: :created, location: @item }
      else
        format.html { redirect_to :back, alert: '画像または文章を入力してください'  }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end


  private

  def set_group
    @group = Group.find(params[:group_id])
  end

  def message_params
    params.require(:message).permit(:body).merge(user_id: current_user.id,group_id: @group.id)
  end
end
