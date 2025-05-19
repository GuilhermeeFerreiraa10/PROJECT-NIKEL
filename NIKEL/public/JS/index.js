const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

  checkLogged();

//LOGAR NA CONTA
document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const checkSession = document.getElementById("session-check").checked;

  const account = getAccount(email);

  if(!account) {
    alert("Opps! Verifique o usuário ou a senha.");
    return;
  }

  if(account) {
    if(account.password !== password) {
      alert("Opps! Verifique o usuário ou a senha.");
      return;
    }

    saveSession(email, checkSession);
  
    window.location.href = "home.html";
  }
});

// CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.length < 5){
      alert("preencha o campo com um e-mail válido.");
      return;   
    }
    if(password.length < 4) {
        alert("preencha o campo com uma senha válido.");
        return;
    }               
   
    saveAccount({
        login: email,
        password: password,
        transactions: []
    });

        myModal.hide();

        alert("conta criada com sucesso");

});

function checkLogged() {
    if(session) {
      sessionStorage.setItem("logged", session);
      logged = session;

    }

  if(logged) {
    saveSession(logged, session);

    window.location.href = "home.html"
    
  }

}

function saveAccount(data) {
  localStorage.setItem(data.login, JSON.stringify(data));

} 

function saveSession(data, saveSession) {
  if(saveSession) {
    localStorage.setItem("session", data);

  }

    sessionStorage.setItem("logged", data);
    
}

function getAccount(key) {
  const account = localStorage.getItem(key);

  if(account) {
    return JSON.parse(account);
        
  }

  return ""; 
}