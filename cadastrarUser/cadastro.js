let btnSenha = document.querySelector("#peekPass");
btnSenha.addEventListener("click", () => {
  let inputSenha = document.querySelector("#password");

  if (inputSenha.getAttribute("type") === "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

let btnSenha2 = document.querySelector("#peekPass2");
btnSenha2.addEventListener("click", () => {
  let inputSenha2 = document.querySelector("#password2");

  if (inputSenha2.getAttribute("type") === "password") {
    inputSenha2.setAttribute("type", "text");
  } else {
    inputSenha2.setAttribute("type", "password");
  }
});


    let labelUserName = document.querySelector('#labelUserName');
    let username = document.querySelector('#username');
    
    let email = document.querySelector('#email');
    let labelEmailUser = document.querySelector('#labelEmailUser');

    let password = document.querySelector('#password');
    let labelPassword = document.querySelector('#labelPassword');
    
    let password2 = document.querySelector('#password2');
    let labelPassword2 = document.querySelector('#labelPassword2');


    username.addEventListener('keyup', () =>{
      if(username.value.length <= 4){
        labelUserName.setAttribute('style', 'color: #ff715b');

      } else{
        labelUserName.setAttribute('style', 'color: #7f73a1');
      }
      
    })

    password.addEventListener('keyup', () => {
      if(password.value.length <= 5){
        labelPassword.setAttribute('style', 'color: #ff715b');
      } else{
        labelPassword.setAttribute('style', 'color: #7f73a1');
      }

      
    })

    password2.addEventListener('keyup', () => {
      if(password2.value !== password.value){
        labelPassword2.setAttribute('style', 'color: #ff715b');
        labelPassword2.innerHTML = ('Senhas não combinam')
      } else{
        labelPassword2.setAttribute('style', 'color: #7f73a1');
        labelPassword2.innerHTML = 'Senhas combinam!'
      }
    })