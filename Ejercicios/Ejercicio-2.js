//Ejercicio 2: Simulación de una Operación Asíncrona con Promesas 

const consultaBD = () =>{

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

const basededatos = consultaBD()
.then( (response ) => {
    console.log(response)
})
.catch( (error) => {
    console.log(error)
})

console.log(basededatos)