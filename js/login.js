/**
 * Constant USERNAME AND PASSWORD to login
 */
const USERNAME= "admin";
const PASSWORD= "admin"


/**
 * Function that valid the login in application
 */
function validarUsuario() {
    const usuario = document.getElementById("username").value;
    const passwordUsuario = document.getElementById("password").value;

    if (!(usuario === USERNAME && passwordUsuario ===PASSWORD)) {
        validInput()
    }else{
        window.location.href = "predicator.html";
    }
    
}


/**
 * Function that valid if imputs are empty
 */
function validInput() {
    const validUser= document.getElementById('username').value;
    const validPassword= document.getElementById("password").value;
    
    if((validUser !=='' || validUser !==undefined) && (validPassword !=='' || validPassword !==undefined)){
        document.getElementById("resultado").style.display= "block";
        document.getElementById("resultado").innerHTML = "Verificar credenciales";

        setTimeout(()=>{
            document.getElementById("resultado").style.display= "none";
        },4000);
    }
    
}