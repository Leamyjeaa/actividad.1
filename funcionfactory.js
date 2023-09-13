// cuando te pida el nomnre, id, facjhadenacimientyo de una persona. crear unjh objeto, libreria externa 
const {generarId}=require("./plugings/generarId")

const buildperson =({getUUID})=>{
    return ({nombre, fechaNacimiento})=>{
        return {
            id: getUUID(),
            nombre: nombre,
            fechaNacimiento: fechaNacimiento
        }
    }
}





