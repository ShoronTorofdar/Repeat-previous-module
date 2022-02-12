document.getElementById('login-submit').addEventListener('click', ()=>{
  const emailFiled = document.getElementById('user-email');
  const userEmail = emailFiled.value;
  console.log(userEmail)
  const passwordFiled = document.getElementById('user-password');
  const userPassword = passwordFiled.value;
  console.log(userPassword);
  if((userEmail=='16107023@iubat.edu')&&(userPassword=='12051')){
    window.location.href = './../banking.html'
  }
})