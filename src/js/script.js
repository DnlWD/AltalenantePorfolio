var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    gutter: 10
  }
});

$('.filters-button-group button').on('click', function () {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({
    filter: filterValue
  });
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})