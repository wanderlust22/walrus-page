$(document).ready(function()  {
  $(function() {
    $(".clickable").click(function() {
      var showing = true;

      if (showing === true){
        $("#initially-showing").fadeOut();
        $("#initially-hidden").fadeIn();
        showing = false;
      }
      else {
        $("#initially-showing").fadeIn();
        $("#initially-hidden").fadeOut();
        showing = true;
      }

    });
  });

  // $(function() {
  //   $(".clickable").click(function() {
  //     // $("#initially-showing").fadeIn();
  //     $("#initially-showing").fadeOut();
  //
  //   });
  // });
});

// $(function( {
//   $
// }))



//
// $("h1").click(function()  {
//   alert("This is a header.");
// });
//
// $("p").click(function() {
//   alert("This is a paragraph.");
// });
//
// $("img").click(function() {
//   alert("This is an image.");
// });
//
//
//
//
// });
