$(document).ready(function(){
     var burgerToggle = 1;
    $('.burger').click(function(event){

    	if (burgerToggle==1){
    $('.side_menu').animate({left: '0px'}, 200);
    $('body').animate({left: '285px'}, 200);
 burgerToggle=0;
 } else {
    $('.side_menu').animate({left: '-285px'}, 200);
        $('body').animate({left: '0px'}, 200);
      burgerToggle=1;
      }

    });
});
