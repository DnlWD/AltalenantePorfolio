const URL = "src/json/dp.json"

$.getJSON(URL, function (data) {
  $("#titolo").html(data.nome + " " + data.cognome + " Portfolio");
  $("#favicon").attr("href", data.logo.ridotto);
  $("#logo").attr("src", data.logo.ridotto);
  $("#nome-cognome").html(data.nome + " " + data.cognome);
  $("#professione").html(data.professione);
  $("#mystyle").attr('href', data.css);
  if (data.landing.type == "img") {
    $("#landing").css('background-image', 'url(' + data.landing.url + ')');
  }
  var tags = _.union.apply(_, _.map(data.project, "tag"));
  $(".filters-button-group").append('<button class="button is-checked" data-filter="*">tutti</button>');
  for (i = 0; i < tags.length; i++) {
    $(".filters-button-group").append('<button class="button" data-filter="' + tags[i] + '">' + tags[i] + '</button>');
  }

  $(document).ready(function () {
    $(".card").on('click', function () {
      $('#proj').css('display', 'inline-block');
      $('body').css('overflow', 'hidden');
      var numProj = $(this).attr('id')
      $('.header').css('background-image', 'url(' + data.project[numProj].cover + ')');
      $('#nome-proj').html(data.project[numProj].name);
      $('#descrizione').html(data.project[numProj].descrizione);
      $('#ggmmyy').html(data.project[numProj].ggmmyy);
    });
  });

  var project = _.map(data.project);
  for (i = 0; i < project.length; i++) {
    var cover = "'" + project[i].cover + "'";
    var identify = project[i].id;
    var name = project[i].name;
    var tags = project[i].tag;
    var tag = (tags.join(' ')).toString();
    $(".grid").append('<div class="grid-item ' + tag + '"><div class="card" id="' + identify + '"style="background-image: url(' + cover + ')" ><div class="caption d-flex justify-content-center align-items-center flex-column"><h4 class="card-title">' + name + '</h4><ul class="tag d-flex flex-row justify-content-around">' + tag + '</ul></div><div class="card-body hidden-desktop text-center"><h4 class="card-title">' + name + '</h4><ul class="tag d-flex flex-row justify-content-around"><li>' + tag + '</li></ul></div></div></div>');
  }
});