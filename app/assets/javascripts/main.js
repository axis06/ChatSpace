$(document).on("page:change", function() {
  function appendList(data) {
    var $mesList = $('<li class="message">');

    var $mesStatusList = $('<div class="message-status cf">');
    var $name = $('<p class="message-status_name">');
    var $datetime = $('<p class="message-status_time">');
    var $mes = $('<div class="message-text">');

    var $appendName = $name.append(data.name);
    var $appenDatetime = $datetime.append(data.created_at);
    var $appendMes = $mes.append(data.body);
    var $appendmesStsLi = $mesStatusList.append($appendName).append($appenDatetime);
    $mesList.attr("data-id",data.id)

    if (data.image.url){
      var $image = $('<img class="img-responsive">');
      $image.attr("src", data.image.url);

      var $appendList = $mesList.append($appendmesStsLi).append($appendMes).append($image);
    }else{
      var $appendList = $mesList.append($appendmesStsLi).append($appendMes);
    }

    return $appendList;
  }

  timer = setInterval(function(){
    $.ajax({
      type: "get",
      url: window.location.href,
      dataType: "json"
    })
    .done(function(data){
      var $mesSpacePre = $('<ul class="chat-messages">');
      var messages = [];
      $.each($(".chat-messages").children('.message'), function( key, mes ) {
        messages.push(Number($(mes).attr("data-id")));
      });
      $.each( data, function( key, value ) {
        if(messages.indexOf(value.id) == -1){
          $(".chat-messages").append(appendList(value));
        }
      });
    })
    .fail(function(jqXHR){
      alert("error")
      console.log(jqXHR);
    });
  }, 5000);

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
      $(".chat-messages").append(appendList(data));
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
