//////////////////////////////funcionesssssssss
//////suma de dos numeros  funcion ordinaria
 sumar(8,6)                   ///envocar la funcion
function sumar (num1,num2){
    return num1 + num2;   
}
const sumar2= (num1, num2) => {
    return num1 + num2;
}
const IVA = 12
//sumar2 (5,6)
module.exports = {
    sumar:sumar,
    sumarDosNumeros:sumar2,
    IVA
}