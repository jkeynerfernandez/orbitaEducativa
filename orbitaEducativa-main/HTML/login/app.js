listaDeUsusrios = localStorage.getItem("listaDeUsusrios");
if (listaDeUsusrios) {
    listaDeUsusrios = JSON.parse(listaDeUsusrios);
    console.log(listaDeUsusrios);
  }
//_______________________________________________________

//_________datos de entrada____________________________
let usuarios= document.getElementById("username");
let contrasena= document.getElementById("password");
let botonIngresar =document.getElementById("ingresar")




botonIngresar.addEventListener("click", function ingresar(){
    listaDeUsusrios.forEach(function(usuario){
        if(usuarios.value == usuario.userName && contrasena.value == usuario.password){
            location.href= "../Estudiantes/perfilEestudiante.html"
            console.log("ingreso");
            
            localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
            usuarioLogueado = localStorage.getItem("usuarioLogueado");
        

        }

    });

});


//____________________- tema de la pagina -_______________________
let theme = document.getElementById("theme");

let body = document.getElementById("body");



let localTheme= localStorage.getItem("them");
console.log(localTheme)


body.classList.remove("theme-light");
body.classList.remove("theme-free");
body.classList.remove("theme-dark");
body.classList.add(localTheme);



theme.addEventListener("change",function changeTheme(){
    
    
    localStorage.setItem("them", theme.value)

       
    if (theme.value == "theme-dark"){
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
        body.classList.remove("theme-free");
        
    }else if( theme.value =="theme-light") {
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-free");
       
    }else if (theme.value == "theme-free"){
        body.classList.add("theme-free");
        body.classList.remove("theme-light");
        body.classList.remove("theme-dark");
    }z
});
