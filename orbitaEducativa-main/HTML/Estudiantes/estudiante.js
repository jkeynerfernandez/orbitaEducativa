let nombreUsuarioLogueado = document.getElementById("nombreUsuarioLogueado");

let usuarioLogueado = localStorage.getItem("usuarioLogueado");
console.log(usuarioLogueado)
usuarioLogueado=JSON.parse(usuarioLogueado)//objeto

nombreUsuarioLogueado.innerHTML=usuarioLogueado.name;