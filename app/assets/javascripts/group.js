$(document).on("page:change", function() {
  var $user_field = $("#user_name");


  $("#user_name").keyup(function() {
      var $user_field = $("#user_name");
      if ($user_field.val()){
        $.ajax({
          type: "get",
          url: "/users/search/" + $user_field.val(),
          data: {},
          dataType: "json"
        })
        .done(function(data){
          console.log(data);
        })
        .fail(function(jqXHR){
          alert("error")
          console.log(jqXHR);
        });
      };
    });
});
