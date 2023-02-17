function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar('Brasil');




  
    function puedeManejar(edad) {
      if(edad >= 18) {
              console.log( true );
      } 
      console.log( false );
    }
    
    puedeManejar(17);

    numeroDeDia = [4,]

   for (let i = 0; i < numeroDeDia.length; i++) { 
      if (numeroDeDia[i] > 1 && numeroDeDia[i] < 7 ){
      console.log("Es dia laboral");
      }
      else if (numeroDeDia[i] == 1 || numeroDeDia[i] == 7 )
        console.log("Es fin de semana");
   } 


