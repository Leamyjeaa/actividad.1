///
const usuarios = [
    {
      id: 1, nombre:"Evelyn"},{
      id: 2, nombre: "Julian"
}]
//function buscarPorId(id){

  //  const usuarioEncontrado = usuarios.find((element) =>{return element.id === id})
   // if(usuarioEncontrado){
     //   console.log("El usuario ha sido encontrado con exito")
   // }
//}
//buscarPorId(1);
/////////////////con el callback siempre tendra un parametro y el parrmetro sera el erro
function buscarPorId(id, callback){

    const usuarioEncontrado = usuarios.find((element) =>{return element.id === id})
    if(!usuarioEncontrado){
        return callback("No se ha encontrado el usuario");
    }
    return callback(null, usuarioEncontrado);
}
buscarPorId(5,(error, usuario)=> {
    if(error){
        console.log("Ha ocurrido un error")
    }
    console.log(usuario);
});
