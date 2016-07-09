$(document).ready(function() {

$("ul li a").click(function(){
    
      alert($(this).attr('href').replace(/\#*/g, ""))

    });
});
