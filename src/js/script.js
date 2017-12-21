$( document ).ready(function() {
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
      gutter: 10
    }
  });

  $('.filters-button-group button').on('click', function () {
    $('button').removeClass("is-checked");
    $(this).addClass("is-checked");
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });
});
