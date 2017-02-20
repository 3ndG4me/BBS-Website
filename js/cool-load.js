$( document ).ready(function() {
   
   var isFirstVisit = readCookie('first-load')
   
   if(isFirstVisit){
      $("#page-top").attr({style: "content:url(img/onload-logo.gif); width:100%; margin: 0 auto;" });

      $('#page-top').delay(2200).fadeOut(1000, function(){
         $("#page-top").attr({style: "" });
         $("#page-top").hide();
      });
      $('#page-top').fadeIn(2000);
       createCookie('first-load','false',7);
   }
   
  
   
});

//Make a cookie to make the loading screen less annoying for frequent visitors

function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}
