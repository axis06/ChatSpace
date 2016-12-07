class MessagesController < ApplicationController
  before_action :set_group, only: [:create,:show]

  def create
    @message = Message.new(message_params)

    respond_to do |format|
      if @message.save
        format.html { redirect_to :back}
        format.json { render :show}
        #format.json { render json: @message.as_json.merge(name: @message.user.name) }
      else
        format.html { redirect_to :back, alert: '画像または文章を入力してください'  }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
  end

  private

  def set_group
    @group = Group.find(params[:group_id])
  end

  def message_params
    params.require(:message).permit(:body).merge(user_id: current_user.id,group_id: @group.id)
  end
end
