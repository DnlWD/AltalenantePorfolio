const URL = "src/json/dp.json"

$.getJSON(URL, function (data) {
  $("#logo").attr("src", data.logo.ridotto);
  $("#nome-cognome").html(data.nome + " " + data.cognome);
  $("#professione").html(data.professione);
  $("#landing").css('background-image', 'url(' + data.landing.url + ')');
  $("#mystyle").attr('href', data.css);
  var tags = _.uniq(
    _.map(data.project, "tag")
  );
  $(".filters-button-group").append('<button class="button is-checked" data-filter="*">tutti</button>');
  for (i = 0; i < tags.length; i++) {
    $(".filters-button-group").append('<button class="button is-checked" data-filter="' + tags[i] + '">' + tags[i] + '</button>');
  }
});