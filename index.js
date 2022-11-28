
let inputEmail = document.querySelector("#email");
let labelEmailUser = document.querySelector("#labelEmailUser");
let inputPassword = document.querySelector("#password");
let labelPasswordUser = document.querySelector("#labelPasswordUser");
let labelErrorMsg = document.querySelector("#labelErrorMsg");
let btnSenha = document.querySelector(".fa-eye");
document.querySelector("#button_entrar").addEventListener("click", loginUser);

function loginUser(event) {
  event.preventDefault();

  //verifica se todos os campos estao preenchidos
  if (!(inputEmail.value !== "") || !(inputPassword.value !== "")) {
    labelErrorMsg.innerHTML = "Preencha todos os campos!";
    labelErrorMsg.setAttribute('style', 'color: #ff715b;');
    inputEmail.focus();
    return;
  } 

  let users_bd = [];
  let userValidator = {
    nome: "",
    email: "",
    senha: "",
    mensagem: "",
  };

  users_bd = JSON.parse(localStorage.getItem("users_bd"));

  users_bd.forEach((getbd) => {
    if (
      inputEmail.value == getbd.email_bd &&
      inputPassword.value == getbd.senha_bd
    ) {
      userValidator = {
        nome: getbd.nome_bd,
        email: getbd.email_bd,
        senha: getbd.senha_bd,
        mensagem: getbd.mensagem_bd,
      };
    }
  });
 
  if(inputEmail.value != userValidator.email && inputPassword.value != userValidator.senha) {
    labelErrorMsg.innerHTML = "Email ou senha incorretos!";
    labelErrorMsg.setAttribute('style', 'color: #ff715b;');
    inputEmail.focus();
    return;
  } else {
    labelErrorMsg.innerHTML = "";
    setTimeout(function() {
      window.location.href="../CRUD/crudPage.html";
    }, 2000);
  }
}

  //------------------------------------------------------------------------------
  //Altera cores da label como alerta visual @EMAIL INPUT
  inputEmail.addEventListener("keyup", () => {
    if (inputEmail.value.length <= 4) {
      labelEmailUser.setAttribute("style", "color: #ff715b");
    } else {
      labelEmailUser.setAttribute("style", "color: #7f73a1");
    }
  });
  //Altera cores da label como alerta visual @Password INPUT
  inputPassword.addEventListener("keyup", () => {
    if (password.value.length <= 5) {
      labelPasswordUser.setAttribute("style", "color: #ff715b");
    } else {
      labelPasswordUser.setAttribute("style", "color: #7f73a1");
    }
  });
  //Mostrar password
  btnSenha.addEventListener("click", () => {
    if (inputPassword.getAttribute("type") === "password") {
      inputPassword.setAttribute("type", "text");
    } else {
      inputPassword.setAttribute("type", "password");
    }
  });

