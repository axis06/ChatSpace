class MessageController < ApplicationController
  def create
    @message = Message.new(item_params)

    respond_to do |format|
      if @message.save
        format.html { redirect_to :back, notice: 'Item was successfully created.' }
        format.json { render action: 'show', status: :created, location: @item }
      else
        format.html { render action: 'new' }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end
  private
  def message_params
    params.require(:message).permit(:body)
  end
end
