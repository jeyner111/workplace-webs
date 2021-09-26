const MAIL = document.getElementById("Correo");

MAIL.addEventListener("input",
    function() {
        checkCorreo(MAIL.value)
    }

)

function checkCorreo(valor) {
    const letters = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; /*add your expression here*/
    valor.match(letters) ?
        (MAIL.classList.remove("false-value"),
            MAIL.classList.add("true-value")
        ) : MAIL.classList.add("false-value")
}