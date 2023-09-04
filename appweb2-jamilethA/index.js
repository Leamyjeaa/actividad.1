///////////////////////////////importar index.js aqui se inifciaq con u7n const
//const{sumarDosNumeros}=require("./funciones")
//sumarDosNumeros(2,5)

////////////en la siguiente clase se va a difinir una funcion de datos

//const datos= require("./datos")
 //la mas convencional de hacer un arreglo
/* 
 for (let i=0; i <= datos.length;i++)
 {
    console.log(datos[i].nombre)
 }
 for (let elemento in datos)
 {

 } */
 // para hacer eso es ,mejor hacer esto

 const datos= require("./datos")
 datos.forEach((el)=>{console.log(el.nombre)})             //por cada elemento del arreglo dado va en parentesis