$( document ).ready(function() {


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
               $("#main-logo").attr("src","img/logo1.png");        
            }
         }
});


