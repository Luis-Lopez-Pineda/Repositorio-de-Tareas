//Ejercicio 4: Procesamiento de una Lista de Productos 

const productos = [ 
{ nombre: "Televisor", precio: 500, categoria: "Electrónica" }, 
{ nombre: "Silla", precio: 100, categoria: "Muebles" }, 
{ nombre: "Laptop", precio: 800, categoria: "Electrónica" }, 
{ nombre: "Mesa", precio: 200, categoria: "Muebles" }, 
{ nombre: "Auriculares", precio: 150, categoria: "Electrónica" } 
]; 

console.log()
const Electrónica = productos.filter( (productos) => {
        if(productos.categoria === "Electrónica"){
            return productos.categoria === "Electrónica"
        }
})


const Productosfiltrados = Electrónica.map( (producto) => {
    return producto.nombre
})


const PrecioTotal = Electrónica.reduce
( (acumulador, productos) => acumulador + productos.precio, 0)


console.log("Estos son los productos con categoria Electrónica: ", Electrónica)
console.log("Estos son los nombres productos con categoria Electrónica: ", Productosfiltrados)
console.log("Este es el precio total de los productos con categoria Electrónica: ", PrecioTotal)
