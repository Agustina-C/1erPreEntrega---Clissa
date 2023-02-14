// Función - registro
function saludar() {
    console.log("¡Bienvenido!");
  }
  saludar();

let nombre
registro()

function registro(){
    let nombre = prompt("Ingrese su nombre de usuario");
    if(nombre){
        alert("¡Bienvenido a Cinemark " + nombre + "!") 
        listaProductos()
    }
    else {
        alert("Debe ingresar su nombre de usuario")
        registro()
    }
}

//Consulta sobre pelicula en cartelera

let pelicula = prompt("¿Qué género cinematográfico prefiere?").toLowerCase()
const ticket = "Este es tu ticket para la película"
while(pelicula != ""){

    switch (pelicula){
        case "Avatar":
            const edad = prompt("¿Sos mayor de 18 años?")
            if(edad > 18){
                alert(ticket)
            }else{
                const Avatar = prompt("¿La película que querés ver es Avatar? si o no").toLowerCase()
                
                if(Avatar == "si"){
                    alert(ticket)
                }else{
                    alert("Seleccionar otra película")
                }
            }
            pelicula = ""
            break
        case "Avatar":
            alert(ticket)
            pelicula = ""
            break
        default:
            alert("La pelicula no esta en cartelera")
            pelicula = prompt("¿Qué pelicula desea ver?").toLowerCase()
            break
    }

}
