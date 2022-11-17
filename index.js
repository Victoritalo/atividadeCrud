let btnSenha = document.querySelector('.fa-eye')
btnSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#password')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
      } else {
        inputSenha.setAttribute('type', 'password')
      }
    })

    let email = document.querySelector('#email');
    let emailUser = document.querySelector('#emailUser');
    let password = document.querySelector('#password');
    let passwordUser = document.querySelector('#passwordUser');

    email.addEventListener('keyup', () =>{
      if(email.value !== string){
        emailUser.setAttribute('style', 'color: #ff4f61');

      } else{
        emailUser.setAttribute('style', 'color: #7f73a1');

      }
      
    })



password.addEventListener('keyup', () => {
      passwordUser.style.fontSizeAdjust = ''
      if(password.value.length <= 3){
        passwordUser.setAttribute('style', 'color: red');
        passwordUser.innerHTML = ('4 ou mais caracteres')
      } else{
        passwordUser.setAttribute('style', 'color: green');
        passwordUser.innerHTML = '4 ou mais caracteres'
        //fazer com small para fonte
      }
    })