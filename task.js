
// Task 1

$('.second-paragraph').append($('<img>',{class:'photo',src:'https://w3schools.com/w3images/newyork.jpg'}))
$(".photo").wrap("<div class='close-bind'></div>");
$('.close-bind').prepend($('<span class="close">x</span>'))
$(".close").click(function(){
  $(".close-bind").hide();
})

// Task 2

$( document ).ready(function() {

  $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
            type: "GET",
            dataType: "json",
      success: function(data) {
        $("#floating_div").html('<div class="close-ad">x</div><h1>'+data[0].name+'</h1><p>'+data[0].company.name+'</p><p>'+data[0].website+'</p>');
      }
    });
  

});


// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}




