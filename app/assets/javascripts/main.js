$(document).on("page:change", function() {

  function appendList(data) {
    var $mesSpace = $(".chat-messages");
    var $mesList = $('<div class="messages">');

    var $mesStatusList = $('<div class="message-status cf">');
    var $name = $('<p class="message-status_name">');
    var $datetime = $('<p class="message-status_time">');
    var $mes = $('<div class="message-text">');

    var $appendName = $name.append(data.name);
    var $appenDatetime = $datetime.append(data.created_at);
    var $appendMes = $mes.append(data.body);
    var $appendmesStsLi = $mesStatusList.append($appendName).append($appenDatetime);
    var $appendList = $mesList.append($appendmesStsLi).append($appendMes);

    $mesSpace.append($appendList)
  }

  $( "#new_message" ).on("submit", function(e) {
    e.preventDefault();
    var postUrl = $("#new_message").attr("action");

    var form = $(this).get(0);
    var formData = new FormData( form );
    $.ajax({
      type: "post",
      url: postUrl ,
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
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

  $( ".fa-image" ).click(function() {
    $("#message_image").click();
  });
});
