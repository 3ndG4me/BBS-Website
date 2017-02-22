$( document ).ready(function() {

   jQuery.browser = {};
   jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase());
   if(jQuery.browser.mozilla){
      console.log('no animation');  
      document.getElementById("#main-logo").src= "img/logo1.png";
   }else{
            if(!$.isEmptyObject(localStorage.getItem('isFirstVisit'))){

            var isFirstVisit = JSON.parse(localStorage.getItem('isFirstVisit'));

            if (isFirstVisit.first_visit){
               $("#page-top").attr({style: "content:url(img/onload-logo.gif); width:100%; margin: 0 auto;" });

               $('#page-top').delay(2200).fadeOut(1000, function(){
                  $("#page-top").attr({style: "" });
                  $("#page-top").hide();
               });
               $('#page-top').fadeIn(2000);
               isFirstVisit = { 'first_visit':false };
            // Put the object into storage
            localStorage.setItem('isFirstVisit', JSON.stringify(isFirstVisit));
            }



            }else{
               $("#page-top").attr({style: "content:url(img/onload-logo.gif); width:100%; margin: 0 auto;" });

               $('#page-top').delay(2200).fadeOut(1000, function(){
                  $("#page-top").attr({style: "" });
                  $("#page-top").hide();
               });
               $('#page-top').fadeIn(2000);
               isFirstVisit = { 'first_visit':false };
            // Put the object into storage
            localStorage.setItem('isFirstVisit', JSON.stringify(isFirstVisit));
            }
   }
});


