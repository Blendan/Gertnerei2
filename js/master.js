$(document).ready(
  function()
  {
    machenavigation();
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
  }
);

function machenavigation()
{
  var posts = document.getElementsByClassName("post_heading");
  var nav = "";

  for (var i = 0; i < posts.length; i++)
  {
    posts[i].id= posts[i].innerHTML+i;
    nav += "<li><a href='#"+posts[i].innerHTML+i+"''>"+posts[i].innerHTML+"</a></li>";
  }

  document.getElementById('navigation').innerHTML = nav;
}
