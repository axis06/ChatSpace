$(document).on("page:change", function() {

  function appendList(data) {
    var $mesSpace = $(".chat-messages");
    var mes = $('<div class="message-text">');
    var mesList = $('<div class="messages">');

    var mesStatusList = $('<div class="message-status cf">');
    var name = $('<p class="message-status_name">');
    var datetime = $('<p class="message-status_time">');

    var appendName = name.append(data.name);
    var appenDdatatime = datetime.append(data.created_at);
    var appendMes = mes.append(data.body);
    var appendmesStsLi = mesStatusList.append(appendName).append(appenDdatatime);
    var appendLi = mesList.append(appendmesStsLi).append(appendMes);

    $mesSpace.append(appendLi)
  }

  $( "#new_message" ).on("submit", function(e) {
    e.preventDefault();
    var postUrl = $("#new_message").attr("action");
    var mesBody = $("#message_body").val();

    $.ajax({
      type: "post",
      url: postUrl ,
      data: {
        message: {
          body: mesBody,
          image: ""
        }
      },
      dataType: "json"
    })
    .done(function(data){
      $("#message_body").val("");
      appendList(data);
    })
    .fail(function(){
      alert("error")
    });
  });
});
