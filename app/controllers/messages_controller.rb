class MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.user_id = 0#FIXME
    @message.group_id = 0#FIXME


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

  def message_params
    params.require(:message).permit(:body)
  end
end
