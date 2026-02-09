const banner = document.getElementById("banner");
const signInForm = document.getElementById("signIn");
const signUpForm = document.getElementById("signup");

const registerRole = document.getElementById("registerRole");
const loginRole = document.getElementById("loginRole");


document.getElementById("userLoginBtn").onclick = () => openLogin("participant");
document.getElementById("adminLoginBtn").onclick = () => openLogin("admin");

document.getElementById("userRegisterBtn").onclick = () => openRegister("participant");
document.getElementById("adminRegisterBtn").onclick = () => openRegister("admin");

document.getElementById("goToSignUp").onclick = () => openRegister(loginRole.value);
document.getElementById("goToSignIn").onclick = () => openLogin(registerRole.value);


function openLogin(role) {
    banner.style.display = "none";
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
    loginRole.value = role;
}

function openRegister(role) {
    banner.style.display = "none";
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
    registerRole.value = role;
}


document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const role = loginRole.value;

    if (role === "participant") {
        window.open("pages/user.html", "_self");
    } else if (role === "admin") {
        window.open("pages/admin.html", "_self");
    }
});


document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const role = registerRole.value;

    if (role === "participant") {
        window.open("pages/user.html", "_self");
    } else if (role === "admin") {
        window.open("pages/admin.html", "_self");
    }
});
function validateEmail(){
   const email = document.getElementById("Gmail").value;
   const emailMsg = document.getElementById("mail");
   const sym1 = email.indexOf("@");
   const sym2 = email.lastIndexOf(".");
   if(email.includes(" ") || sym1==sym2+1 || sym1+1==sym2 || sym1>sym2 || sym2===email.length-1)
       emailMsg.textContent="Invalid Email Formate...";
   else
       emailMsg.textContent="";
}
function validatePassword(){
   const password = document.getElementById("password").value;
   const passStrength = document.getElementById("pass");
   let cap=small=num=sym=0;
   for(let c of password){
      if(c>='0' && c<='9') num=1;
      else if(c>='A' && c<='Z') cap=1;
      else if(c>='a' && c<='z') small=1;
      else sym=1;
   }
   if(password.length<8) passStrength.textContent="Too Short";
   else if(cap+small+num+sym<=2)  passStrength.textContent="Too Weak";
   else if(cap+small+num+sym==4)
      passStrength.textContent="Strong Password";
   else if(cap+small+num+sym==3)
      passStrength.textContent="Medium Password";
}
   

