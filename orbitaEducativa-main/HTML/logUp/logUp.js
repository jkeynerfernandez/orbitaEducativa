
let submit =document.getElementById("submit");
let nombre =document.getElementById("nombre");
let correo =document.getElementById("correo");
let usuario1 =document.getElementById("usuario");
let contrasena =document.getElementById("contrasena");
let listajson ="";


let listaDeUsusrios= [];
let storedUsuarios
//regitro de usuario...__________________
submit.addEventListener("click", function registro(){


    let usuario = {
        name: nombre.value ,
        email: correo.value ,
        userName: usuario1.value,
        password: contrasena.value
    }

    listaDeUsusrios.push(usuario);
    console.log(listaDeUsusrios);


    


    
    localStorage.setItem("listaDeUsusrios", JSON.stringify(listaDeUsusrios));
    storedUsuarios = localStorage.getItem("listaDeUsusrios");

    console.log("storedU",storedUsuarios)

});
//__________________________________________







if (storedUsuarios) {
 
    try {
        listaDeUsusrios = JSON.parse(storedUsuarios);
        console.log("Parsed Usuarios:", storedUsuarios);
    } catch (error) {
        console.error("Error parsing stored Magos:", error);
    }
}

