json.array! @messages do |message|
  json.( message, :id, :body,:image)
  json.name message.user.name
  json.created_at message.created_at.strftime("%Y/%m/%d %H:%M:%S")
end
