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
    $(".filters-button-group").append('<button class="button" data-filter="' + tags[i] + '">' + tags[i] + '</button>');
  }
  
$(document).ready(function() {
  $(".card").on('click', function () {
    $('#proj').css('display','inline-block'); 
    $('body').css('overflow','hidden');
  });
});

  var project = _.map(data.project);
  for (i = 0; i < project.length; i++) {
    var cover = "'" + project[i].cover + "'";
    var name = project[i].name;
    var tag = project[i].tag;
    $(".grid").append('<div class="grid-item ' + tag + '"><div class="card" style="background-image: url(' + cover + ')" ><img class="card-img-top" src=' + cover + ' alt=""><div class="caption d-flex justify-content-center align-items-center flex-column"><h4 class="card-title">' + name + '</h4><ul class="tag d-flex flex-row justify-content-around">' + tag + '</ul></div><div class="card-body hidden-desktop text-center"><h4 class="card-title">' + name + '</h4><ul class="tag d-flex flex-row justify-content-around"><li>' + tag + '</li></ul></div></div></div>');
  }
});
