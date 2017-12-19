const URL = "src/json/dp.json"

$.getJSON(URL, function (data) {
  $("#logo").attr("src", data.logo.ridotto);
  $("#nome-cognome").html(data.nome + " " + data.cognome);
  $("#professione").html(data.professione);
  $("#landing").css('background-image', 'url('+ data.landing.url +')');
  $("#mystyle").attr('href', data.css);
});