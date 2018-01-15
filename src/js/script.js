$( document ).ready(function() {
  //Funzione che gestisce i Filtri dei progetti
  $('.filters-button-group button').on('click', function () {
    $('button').removeClass("is-checked");
    //This di base seleziona il pulsante che riceve l'input (nel nostro caso il click)
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
  //Funzione che mostra il modale on click
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });
});
