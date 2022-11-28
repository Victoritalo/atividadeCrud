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

  document.querySelector("#btn_cadastro").addEventListener("click", cadastroUser);

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
    });

    
// original
//   function cadastroUser() {
//   let inputs = document.getElementsByTagName("input");
//   for (let input of inputs) {
//     localStorage.setItem(input.id, input.value);
//   }
// }


function cadastroUser(event) {
  event.preventDefault();

  const usuarioInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const password2Input = document.getElementById('password2');

  if(passwordInput.value <= 5) {
    alert('senha menor que 6 caracteres');
    
  }
  if(passwordInput.value !== password2Input.value) {
    alert('senhas diferentes!');
    return;
  }



  // let usuario = {};


  // let user = {
  //   nome: 'Joao',
  //   email:"joao@google.com",
  //   senha: '123123',
  //   confirma-senha: '123123';    
  // }
  // // 1 - obter do localstorage os usuarios
  // // 2 - adicionar o novo usuario no array de usuarios cadastrados
  // // 3 - salvar no localstorage
  
  // let usuarios = localStorage.getItem('users');
  // if(!usuarios) {
  //   usuarios = [];
  //   usuarios.push(usuario);
  // } else {
  //   usuarios = JSON.parse(usuarios);


  //   // verificar se existe usuario com o mesmo email
  //   // se nao existir, cadastra
  //   usuarios.push(usuario);
  // }


  // localStorage.setItem('users', JSON.stringify(usuarios));

}





//CRIAR E SALVAR OS USUARIOS NO LOCAL STORAGE
/*
  1 - Criar usuario, 2- Criar objeto usuario, 3- Adicionar o objeto no local storage,
*/













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

  document.querySelector("#btn_cadastro").addEventListener("click", cadastroUser);

    // let labelUserName = document.querySelector('#labelUserName');
    // let username = document.querySelector('#username');
    // // let labelUserName = document.querySelector('#labelUserName');
    // let email = document.querySelector('#email');
    // let labelEmailUser = document.querySelector('#labelEmailUser');

    // let password = document.querySelector('#password');
    // let labelPassword = document.querySelector('#labelPassword');
    
    // let password2 = document.querySelector('#password2');
    // let labelPassword2 = document.querySelector('#labelPassword2');


    // username.addEventListener('keyup', () =>{
    //   if(username.value.length <= 4){
    //     labelUserName.setAttribute('style', 'color: #ff715b');

    //   } else{
    //     labelUserName.setAttribute('style', 'color: #7f73a1');
    //   }
      
    // })

    // password.addEventListener('keyup', () => {
    //   if(password.value.length <= 5){
    //     labelPassword.setAttribute('style', 'color: #ff715b');
    //   } else{
    //     labelPassword.setAttribute('style', 'color: #7f73a1');
    //   }
    // })

    // password2.addEventListener('keyup', () => {
    //   if(password2.value !== password.value){
    //     labelPassword2.setAttribute('style', 'color: #ff715b');
    //     labelPassword2.innerHTML = ('Senhas não combinam')
    //   } else{
    //     labelPassword2.setAttribute('style', 'color: #7f73a1');
    //     labelPassword2.innerHTML = 'Senhas combinam!'
    //   }
    // });

    
// original
//   function cadastroUser() {
//   let inputs = document.getElementsByTagName("input");
//   for (let input of inputs) {
//     localStorage.setItem(input.id, input.value);
//   }
// }


function cadastroUser(event) {
  event.preventDefault();

  const usuarioInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const password2Input = document.getElementById('password2');
  // let labelUserName = document.querySelector('#labelUserName');
  
  if(passwordInput.value <= 5) {
    labelPassword.setAttribute('style', 'color: #ff715b');
  }
  
  if(usuarioInput.value <= 4){
    labelUserName.setAttribute('style', 'color: #ff715b');
  }

  if(emailInput.value <= 4){
    labelEmailUser.setAttribute('style', 'color: #ff715b');
  }
  

  if(passwordInput.value !== password2Input.value) {
    let labelPassword2 = document.querySelector('#labelPassword2');
    labelPassword2.setAttribute('style', 'color: #ff715b');
    labelPassword2.innerHTML = ('Senhas não combinam')
    return;
  }

  //verifica se todos os campos estao preenchidos
  if(!(usuarioInput.value !== '') || !(emailInput.value !== '') || !(passwordInput.value !== '') || !(password2Input.value !== '')){
    alert(`Existem campos em branco!`);
    return;
  }
 


  console.log('verificacao de length password');
  // verifica se o tamanho do password é maior que 5 caracteres
  


  console.log('verificacao de password match');
  

  // pega usuarios do localstorage
  let users = pegaUsers();

  // verifica se ja existe um user com o email cadastrado
  let usersFiltrado = users.filter(user => user.email == emailInput.value);
  console.log('filtro de email');
  if(usersFiltrado.length > 0) {
    labelEmailUser.innerHTML = ('Este email já está cadastrado!');
    return;
  }

  // cria um objeto do usuario
   const usuario = {
    nome: usuarioInput.value,
    email: emailInput.value,
    senha: passwordInput.value,
    mensagens: []
   };
  
  // adiciona ao array de usuarios
  users.push(usuario);
  // salva no local storage
  localStorage.setItem('users', JSON.stringify(users));

  alert('usuario criado!')
}

function pegaUsers () {
  let usuarios = localStorage.getItem('users');
  if(!usuarios) {
    usuarios = [];
  } else {
    usuarios = JSON.parse(usuarios);
  }

  return usuarios;
}