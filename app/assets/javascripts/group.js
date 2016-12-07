$(document).on("page:change", function() {

  var $user_field = $("#user-name");
  var $user_results = $("#user-search-result");

  function appendList(data) {
    var $user_result = $('<div class="chat-group-user clearfix">');
    var $user_result_name = $('<p class="chat-group-user__name">');
    $user_result_name.attr('id', 'user_' + data.id);

    var $user_result_btn = $('<a class="user-search-add chat-group-user__btn chat-group-user__btn--add" href="#">追加</a>');
    $user_result_btn.attr("data-id",data.id);
    $user_result_btn.attr("data-name",data.name);

    var $appendName = $user_result_name.append(data.name);
    var $appendList = $user_result.append($user_result_name).append($user_result_btn);
    $user_results.append($appendList);
  }

  $("#user-name").keyup(function() {
    if ($user_field.val()){
      $.ajax({
        type: "get",
        url: "/users/search/" + $user_field.val(),
        data: {},
        dataType: "json"
      })
      .done(function(data){
        $user_results.empty();
        $.each( data, function( key, value ) {
          appendList(value)
        });

      })
      .fail(function(jqXHR){
        alert("error")
        console.log(jqXHR);
      });
    }else{
      $user_results.empty();
    };
  });
});
