/// se utiliza para servicio de url
const axios = require ("axios")
const httpClient = {
    get: async(url)=>{
        const {data} = await axios.get(url)
        return data;
    } ,
    post:(url,body)=>{},
    put:(url,body)=>{},
    delete:(url,body)=>{},
}

module.exports = {httpClient}