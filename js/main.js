
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

        var chapaLB = chapaL + 93;
        var chapaLC = chapaL + 112;
        var chapaLBC = chapaL + 158;

        var chapaCB = chapaC + 47;
        var chapaCC = chapaC + 54;
        var chapaCBC = chapaC + 75;

    
       
        
            if(parseInt($(this).val()) > 0){
                $(this).css("background","#99ffcc");
            }else{
                $(this).css("background","#ffcccc");
            };


       if (!isNaN(comp) && comp > 0 && !isNaN(larg) && larg > 0 && !isNaN(alt) && alt > 0){

            $("#chapa-B").html (chapaLB + " x " + chapaCB);
            $("#chapa-C").html (chapaLC + " x " + chapaCC);
            $("#chapa-BC").html (chapaLBC + " x " + chapaCBC);

            $(".arranjo").html ("1 x 1");

            $("#area-B").html (((chapaLB * chapaCB) * (10**-6)).toFixed(3) + " m2");
            $("#area-C").html (((chapaLC * chapaCC) * (10**-6)).toFixed(3) + " m2");
            $("#area-BC").html (((chapaLBC * chapaCBC) * (10**-6)).toFixed(3) + " m2");

            $("#custo-forma-B").html ((((chapaLB * 7) + (chapaCB * 9)) * 0.09).toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits:0, maximumFractionDigits: 0}));
            $("#custo-forma-C").html ((((chapaLC * 7) + (chapaCC * 9)) * 0.09).toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits:0, maximumFractionDigits: 0}));
            $("#custo-forma-BC").html ((((chapaLBC * 7) + (chapaCBC * 9)) * 0.09).toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits:0, maximumFractionDigits: 0}));

            $("#refile").html ("* Chapa com refile (15mm). <br> * Custo para forma rotativa (Valor estimado. Consulte sempre seu fornecedor)");

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


