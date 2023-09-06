/////creamops esta carpeta sobre el paquete de uuid
const{v4:uuid}= require("uuid")
const generarId = () => {
    return uuid()
}
module.exports={
    generarId 
}