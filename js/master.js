$(document).ready(
  function()
  {
    machenavigation();

    aktualisireevents();

    $(".akt_menu").click(
      function()
      {
        $("#navigation").toggleClass("hideNavigation");
        $(".akt_menu").toggle();
        $("#akt_menue_deakt").toggle();
      }
    );

    $("#akt_menue_deakt").click(
      function()
      {
        $("#navigation").toggleClass("hideNavigation");
        $(".akt_menu").toggle();
        $("#akt_menue_deakt").toggle();
      }
    );

    $("#post-Events .post_conten_block").click(
      function()
      {
        $(this).toggleClass("event_hidden");
      }
    );
  }
);

function machenavigation()
{
  var posts = document.getElementsByClassName("post_heading");
  var articel = document.getElementsByClassName("post");

  var nav = "";

  for (var i = 0; i < posts.length; i++)
  {
    articel[i].id= "post-"+posts[i].innerHTML;
    nav += "<li><a href='#"+"post-"+posts[i].innerHTML+"''>"+posts[i].innerHTML+"</a></li>";
  }

  document.getElementById('navigation').innerHTML = nav;
}


var id_aktualisireevents = 0;
var vegangeneevents = new String();

function aktualisireevents()
{

  id_aktualisireevents = 0;
  vegangeneevents = "";

  $("#post-Events .post_conten_block h3").each(
    function()
    {
      var date = new Date();

      var event_dates_string = $( this ).text();

      event_dates_string = event_dates_string.split("/");

      //$("#post-Events").append(event_dates_string[0]+"|"+event_dates_string[1]+"|"+event_dates_string[2]+"|"); //debug
      //$("#post-Events").append(date.getDate()+"|"+date.getMonth()+"|"+date.getFullYear()); //debug

      if (parseInt(event_dates_string[1])<date.getMonth()||parseInt(event_dates_string[0])<date.getDate()&&parseInt(event_dates_string[1])==date.getMonth()||parseInt(event_dates_string[2])<date.getFullYear())
      {
        $("#post-Events .post_conten_block").eq(id_aktualisireevents).css("display","none");
        vegangeneevents = vegangeneevents+"<div class='post_conten_block'>"+$("#post-Events .post_conten_block").eq(id_aktualisireevents).html()+"</div>";
      }

      id_aktualisireevents ++;
    }
  );

  if (vegangeneevents!="")
  {
    $("#post-Events").append("<hr><div id='vergangeevents'>"+vegangeneevents+"</div>");
  }

  verstekeevents();

}

function verstekeevents()
{
  $("#post-Events .post_conten_block").addClass("event_hidden");
  $("#post-Events .post_conten_block").eq(0).removeClass("event_hidden");
}
