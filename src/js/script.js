$( document ).ready(function() {
  $('.filters-button-group button').on('click', function () {
    $('button').removeClass("is-checked");
    $(this).addClass("is-checked");
    var nome= $(this).text();
      if (nome != "tutti"){
        $(".grid-item").hide();
        $("."+nome).fadeIn("slow");
      }
      else {+
        $(".grid-item").hide();
        $(".grid-item").fadeIn("slow");
      }
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });
});
