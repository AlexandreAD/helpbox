
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

            $("#chapa-B").html ((chapaL + 93) + " x " + (chapaC + 47));
            $("#chapa-C").html ((chapaL + 112) + " x " + (chapaC + 54));
            $("#chapa-BC").html ((chapaL + 158) + " x " + (chapaC + 75));

            $(".arranjo").html ("1 x 1");

            $("#area-B").html ((((chapaL + 93) * (chapaC + 47)) * (10**-6)).toFixed(3) + " m2");
            $("#area-C").html ((((chapaL + 112) * (chapaC + 54)) * (10**-6)).toFixed(3) + " m2");
            $("#area-BC").html ((((chapaL + 158) * (chapaC + 75)) * (10**-6)).toFixed(3) + " m2");

            $("#refile").html ("* Chapa com refile (15mm).");

       }else {
        $( ".wrap-resultado span").html("");
       };   
       
       
    });
 
    function share(){
        if (navigator.share !== undefined) {
            navigator.share({
                title: 'O título da sua página',
                text: 'Um texto de resumo',
                url: 'https://seusite.com/sua_url',
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        }
    }

})(jQuery);


