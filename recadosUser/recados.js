document.querySelector("#logout").addEventListener("click", logoutUser);
let textinho = document.querySelector('#alteraTexto');
let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
let welcomeUser = document.querySelector('#welcomeUser');

if(localStorage.getItem('token') == null){
    alert("Realize o login para acessar a página!");
    document.querySelector('#hideall').style.visibility = 'hidden'
    setTimeout(function() {
        window.location.href="../index.html";
      }, 1500);
}

welcomeUser.innerHTML = `Bem vindo, ${loggedUser.nome}!`

function logoutUser(){
    localStorage.removeItem('token');
    // localStorage.removeItem('loggedUser');
    window.location.href="../index.html";
}



