////en typescript  los codigos que se van creando se van viendo cuando lo corres  a diferencia de java con este comando en el terminal "npm run dev o buid" 
//cuando se quiere correr el start 
// let nombre:string = "Jamileth"
// nombre = "Jamileth"
// console.log("pruebax")
// interface IUsuario { 
//     id : number;
//     nombre : string;
// }
// const  usuarios: IUsuario[] = [
//     {id:1 , nombre: "Jamileth" },
//     {id:2 , nombre: "Estelita"},
//     {id:3 , nombre: "Julian"}

// ]
///////una funcion que reciba un numero 

function recivaNumero(numero:number){

    for(let i = 0;i<=10;i++ ){
        const multiplicacion = numero *i;
        console.log(multiplicacion);
    }
}

recivaNumero(5);