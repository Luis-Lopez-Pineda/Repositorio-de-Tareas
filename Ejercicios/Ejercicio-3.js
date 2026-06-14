//Ejercicio 3: Uso de async y await para Manejar Promesas

const consultaBD = async () =>{

    return new Promise((resolve, reject) => {
        setTimeout( () => {

            const numRandom = Math.floor(Math.random() * 10000000)
            console.log(numRandom)
            if (numRandom % 2 === 0){
                resolve('Consulta exitosa')
            }
            else{
                reject('Error en la consulta')
            }
            
        }, 3000);
    })
}

const HacerConsulta = async  () => {

    try{
        const consulta = await consultaBD()
        console.log(consulta)
    }
    catch(error){
        console.log(error)
    }
}

console.log(HacerConsulta())
   
