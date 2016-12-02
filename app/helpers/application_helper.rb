module ApplicationHelper
  def get_last_message(group)
    if group.messages.present?
      group.messages.last.body
    else
      "まだメッセージがありません"
    end
  end
end
