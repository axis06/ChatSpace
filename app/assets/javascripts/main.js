$(document).on("page:change", function() {

  function appendList(data) {
    var $mesSpace = $(".chat-messages");
    var $mes = $('<div class="message-text">');
    var $mesList = $('<div class="messages">');

    var $mesStatusList = $('<div class="message-status cf">');
    var $name = $('<p class="message-status_name">');
    var $datetime = $('<p class="message-status_time">');

    var $appendName = $name.append(data.name);
    var $appenDdatatime = $datetime.append(data.created_at);
    var $appendMes = $mes.append(data.body);
    var $appendmesStsLi = $mesStatusList.append(appendName).append(appenDdatatime);
    var $appendList = $mesList.append(appendmesStsLi).append(appendMes);

    $mesSpace.append(appendList)
  }

  $( "#new_message" ).on("submit", function(e) {
    e.preventDefault();
    var postUrl = $("#new_message").attr("action");
    var mesBody = $("#message_body").val();
    var mesImg = $("#message_image").val();

    var form = $("#new_message").get()[0];
    var formData = new FormData( form );
    $.ajax({
      type: "post",
      url: postUrl ,
      data: formData,
      },
      dataType: "json"
    })
    .done(function(data){
      appendList(data);
      $("#message_body").val("");
    })
    .fail(function(jqXHR){
      alert("error")
      console.log(jqXHR);
    });
  });
});
