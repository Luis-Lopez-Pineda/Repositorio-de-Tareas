//Ejercicio 1: Consumo de una API y Procesamiento de Datos
const getUsers = async () => {

        try{

            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if(!response.ok) return

            const users = await response.json()
            users.forEach((user) => {
                console.log('Nombre:', user.name, 'Email:', user.email)
            })            
            return users
            }
            catch(erorr){
            console.log('Hubo un error')
        }
}

getUsers();