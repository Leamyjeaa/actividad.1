let nombreEstudiante = "Roni"
//const notaFinal =10
//notaFinal=20
const estudiante = {
    nombre: "Jamileth",
    direcciones: [
        
            {tipo:"hogar", direccion:"los esteros", geolocalizacion:{lat:"34",lng:"234"}},
            { tipo:"oficina", direccion:"cdla universitaria", geolocalizacion:{lat:"39",lng:"224"}},
            { tipo:"padres", direccion:"los almendros", geolocalizacion:{lat:"74",lng:"134"}},
            { tipo:"novia", direccion:"las cumbres", geolocalizacion:{lat:"31",lng:"138"}},
        
    ],
    telefono: ["992265847","554487548","99586457478"],
    correo: "elroni@gmail.com",
}
//console.log(estudiante.direcciones[2].geolocalizacion.lat)
//const{nombre, correo}=estudiante;
//console.log()
//console.log({nombre, correo})
//const {direcciones}=estudiante;

//const[a,b,c,d] = = direcciones
//console.log(b)
///////////////////////////////objetos  forma para nombrar otro objeto mas
//const estudiante2= estudiante;
//estudiante2.nombre="Zuley"
//console.log(estudiante)
//console.log(estudiante2)
////////////////////////////////////// el estres ...estudiante hace que 
const cliente1={
identificacion:"13467895",
nombre:"HOLA MUNDO",
direccion:"Manta",
telefrono:"123654"
}
//console.log({...cliente1}) //sirv para esparcir los elementos que anteriormente se han escrito 

const{identificacion}=cliente1    //desustructurarcliente1  de este elemento estraer cliente1
console.log (identificacion)