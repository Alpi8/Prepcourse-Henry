// Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:


num = 50
nuevoArray = [] 


for (let i = 0; i < 10; i++) {
    num = num + 2;
    nuevoArray.push(num);   
    if (i == num){
        console.log("Se interrumpió la ejecución")
        } 
}
console.log(nuevoArray)

console.log ("Ultimo ejercicio") 
// Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
// Guardar cada nuevo valor en un array y retornarlo.
// Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
// se continua con la siguiente iteración.
// [PISTA]: utiliza el statement 'continue'.
// Tu código:
numb= 50
segundoArray = []
for (let i = 0; i < 10; i++) {
    numb = numb+ 2;
        segundoArray.push(numb); 
   if (i == 4){
     segundoArray.pop()
       continue;    
       }
       
}

console.log(segundoArray)
