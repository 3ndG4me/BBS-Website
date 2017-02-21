$( document ).ready(function() {
   $("#main-view").attr({style: "content:url(img/onload-logo.gif); width:100%; margin: 0 auto;" });

   $('#main-view').delay(2200).fadeOut(1000, function(){
      $("#main-view").attr({style: "" });
      $("#main-view").hide();
   });
   $('#main-view').fadeIn(2000);
});
