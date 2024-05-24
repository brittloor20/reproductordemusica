const viewPassword = document.getElementById ('viewPassword');
const passwordInput = document.getElementById ('passwordInput');
const usernameInput = document.getElementById ('usernameInput');
const LoginBtn = document.getElementById ('LoginBtn');

viewPassword.addEventListener ('click', () =>{
    const actualType = passwordInput.getAttribute ('type');
    if (actualType === 'password'){
        passwordInput.setAttribute ('type', 'text');
    }else{
        passwordInput.setAttribute ('type', 'password');
    }
    passwordInput.setAttribute ('type', 'text');
})

const users =  [
    {
        username: 'britta',
        password: '0000'
    },

]

LoginBtn.addEventListener ('click', (event) =>{
    event.preventDefault ();
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;

    const user = users.find ((user) => user.username === usernameValue && user.password === passwordValue);

    if (user){
        alert ("Login Sucessfully!");
        localStorage.setItem ('isLogged', true);
        window.location.href = './index.html';
    }else{
        console.log ('Wrong Credentials');
    }

})
