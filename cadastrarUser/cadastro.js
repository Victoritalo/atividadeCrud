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