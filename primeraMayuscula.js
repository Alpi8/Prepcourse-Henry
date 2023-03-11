
var nombre = "camilo"

for (i = 0; i < nombre.length; i ++){
    var borrarPrimera = nombre.split("").splice(1);
    var primeraMayuscula = nombre[0].toUpperCase();
    var cadena = borrarPrimera.join("");
    
    
}
console.log(primeraMayuscula + cadena);