//Ejercicio 5: Gestión de Tareas Pendientes 

const Tareas = []

const agregarTarea = (descripcion) => {
    const nuevaTarea = {
        descripcion: descripcion,
        completada: false
    }
    Tareas.push({descripcion, completada: false})
}

const marcarTareaComoCompletada = (descripcion) => {

    const buscadorTarea = Tareas.find(Tareas => Tareas.descripcion === descripcion)
        
    if(buscadorTarea){
            buscadorTarea.completada = true
            console.log("Tarea marcada como completa")
        }
    else{
        console.log("No se encontro la tarea")
    }
}

const listaTareasPendientes = () => {

    const pendientes = Tareas.filter( (Tareas) =>{
        return Tareas.completada === false
    })

    if(pendientes.length > 0){
        pendientes.forEach( (Tareas) => {
            console.log("-", Tareas.descripcion)
        })
    }
    else{
        console.log("Sin tareas pendientes.")
    }

}

const listaTareasCompletadas = () => {

    const completas = Tareas.filter( (Tareas) => {
        return Tareas.completada === true
    })

    if(completas.length > 0 ){
        completas.forEach( (Tareas) => {
            console.log("-", Tareas.descripcion)
        })
    }
    else{
        console.log("No hay tareas completadas.")
    }
}

// Agregar tareas 
agregarTarea("Tengo que hacer la Tarea antes del sabado")
agregarTarea("Debo ir al Gimnasio antes de las 12 PM")
agregarTarea("Tengo que estudiar los lunes")
agregarTarea("Cocinar a las 10")
// Marcar tareas como completadas 
marcarTareaComoCompletada("Tengo que estudiar los lunes") 
// Listar tareas 
listaTareasPendientes()
listaTareasCompletadas()
        
    


