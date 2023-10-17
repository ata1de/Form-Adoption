var opcoes = document.querySelectorAll(".gender input[type='radio']");

function checkPasswords(){
    var password = document.getElementById("password").value
    var confirme = document.getElementById("confirmePassword").value

    if (password !== confirme) {
    window.alert("Senhas diferentes,verifique de novo!")
}
}


opcoes.forEach(opcao => {
    opcao.addEventListener("change", function() {
        opcoes.forEach(radio => {
            if (radio !== this) {
                radio.checked = false;
            }
        });
    });
});
