
(function ($) {
    "use strict";

    $(document).ready(function(){
        $('.input100').mask('9999');
    });

    $(document).on('keypress', '.input100', function(e) {
       
          var key = (window.event)?event.keyCode:e.which;
          if((key > 47 && key < 58)) {
            
              return true;
              
            } else {
                  
               return (key == 8 || key == 0)?true:false;
               
           };
    });
      
  
    $(".input100").keyup(function(){

        

        var comp = parseInt($('#comp').val());
        var larg = parseInt($('#larg').val());
        var alt = parseInt($('#alt').val());
        var chapaL = comp + (alt * 4);
        var chapaC = (larg *2 ) + (alt * 3);
    
       
        
            if(parseInt($(this).val()) > 0){
                $(this).css("background","#99ffcc");
            }else{
                $(this).css("background","#ffcccc");
            };


       if (!isNaN(comp) && comp > 0 && !isNaN(larg) && larg > 0 && !isNaN(alt) && alt > 0){

            $("#chapa-B").html ((chapaL + 63) + " x " + (chapaC + 17));
            $("#chapa-C").html ((chapaL + 82) + " x " + (chapaC + 24));
            $("#chapa-BC").html ((chapaL + 128) + " x " + (chapaC + 45));

            $("#area-B").html ((((chapaL + 63) * (chapaC + 17)) * (10**-6)).toFixed(2) + " m2");
            $("#area-C").html ((((chapaL + 82) * (chapaC + 24)) * (10**-6)).toFixed(2) + " m2");
            $("#area-BC").html ((((chapaL + 128) * (chapaC + 45)) * (10**-6)).toFixed(2) + " m2");
       }else {
        $( ".wrap-resultado span").html("");
       };   
       
       
    });
 


})(jQuery);


