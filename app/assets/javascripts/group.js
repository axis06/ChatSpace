$(document).on("page:change", function() {

  var $user_field = $("#user-name");
  var $user_results = $("#user-search-result");
  var $user_chat_menbers = $("#user-chat-menber");

  function appendList(id,name,status) {
    var $user_result = $('<div class="chat-group-user clearfix">');
    var $user_result_name = $('<p class="chat-group-user__name">');
    $user_result.attr('id', 'user_'+id);
    $user_result.attr('data-id', id);

    var $user_result_btn = $('<a class="user-'+status+' chat-group-user__btn chat-group-user__btn--'+status+'">');
    (status=="add")?$user_result_btn.append("追加"):$user_result_btn.append("削除");

    $user_result_btn.attr("data-id",id);
    $user_result_btn.attr("data-name",name);
    var $appendName = $user_result_name.append(name);



    if (status=="add"){
      var $appendList = $user_result.append($user_result_name).append($user_result_btn);
      $user_results.append($appendList)
    }else{
      var $post_input = $('<input name="group[user_ids][]" type="hidden">');
      $post_input.val(id);

      var $appendList = $user_result.append($post_input).append($user_result_name).append($user_result_btn);
      $user_chat_menbers.append($appendList);
    }
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
        var menbers = [];
        $.each($user_chat_menbers.children('.chat-group-user'), function( key, menber ) {
          menbers.push(Number($(menber).attr("data-id")));
        });
        $.each( data, function( key, value ) {
          if(menbers.indexOf(value.id)==-1){
            appendList(value.id,value.name,"add")
          }
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

  $("#user-search-result").on("click", ".user-add", function() {
    appendList($(this).attr('data-id'),$(this).attr('data-name'),"remove")
    $("#user_"+$(this).attr('data-id')).remove();
  });

  $("#user-chat-menber").on("click", ".user-remove", function() {
    $("#user_"+$(this).attr('data-id')).remove();
  });

});
