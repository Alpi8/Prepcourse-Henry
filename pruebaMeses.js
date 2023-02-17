nuevoArreglo = [] 
 //array = ["Marzo", "Julio", "Enero", "Marzo", "Diciembre", "Julio", "Noviembre", "Noviembre"]
 array = ["Julio","Diciembre", "Julio"]
//array = ["Enero",'Marzo', 'Noviembre', 'Enero']
ninguno = 0
      for (let i = 0; i < array.length; i++) { 
                
            if (array[i] == "Marzo"){
                nuevoArreglo.push("Marzo");}
                
                
                else if (array[i] == "Noviembre"){
                    nuevoArreglo.push("Noviembre");}
                     
                
                else if (array[i] == "Enero"){
                    nuevoArreglo.push("Enero");
                    console.log (nuevoArreglo)  
                    console.log (nuevoArreglo.length)}

                
                }
        if (ninguno >= nuevoArreglo.length){
            console.log ("No se encontraron los meses pedidos")    
}
               
 

    
/* 
    console.log("SEGUNDO POSIBLE METODO:")
pruebaMeses = []
  
    for (let i = 0; i < array.length; i++){
        if (array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre"){
                segundoMetodo = array.filter(arra => array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre")
                
        }
        console.log (segundoMetodo)
    }
*/