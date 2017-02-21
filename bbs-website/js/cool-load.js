$( document ).ready(function() {
   jQuery.browser = {};
   jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit    /.test(navigator.userAgent.toLowerCase());
   if(jQuery.browser.mozilla){
      console.log('no animation');  
      
   }else{
   $("#page-top").attr({style: "content:url(img/onload-logo.gif); width:100%; margin: 0 auto;" });

   $('#page-top').delay(2200).fadeOut(1000, function(){
      $("#page-top").attr({style: "" });
      $("#page-top").hide();
   });
   $('#page-top').fadeIn(2000);
      
   }
});
