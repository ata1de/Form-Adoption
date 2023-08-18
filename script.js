function checkPasswords(){
    var password = document.getElementById("password").value
    var confirme = document.getElementById("confirmePassword").value

    if (password !== confirme) {
    window.alert("Senhas diferentes,verifique de novo!")
}
}
