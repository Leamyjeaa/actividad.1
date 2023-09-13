const {getPokemon} = require("./GetData")

getPokemon= getPokemon(100).then((pokemon)=>{
    console.log(pokemon)
}
)

console.log(pokemons)


//const {generarId} = require("./pluguins")
//const {buildperson} = require("./funcionfactory")

//const functionperson = buildperson({generarId})

//const objeto = {
  //  nombre: "Jamileth",
   // fechaNacimiento: "2002-12-05"
//}

//const Jamileth = functionperson (objeto)
//console.log({Jamileth})