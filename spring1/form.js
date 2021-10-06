 function checkUsername(valor) {
     if (!/[^a-zA-Z0-9]/.test(valor) && ((valor.length >= 4) || (valor <= 30))) {
         return true;
     } else {
         return false;
     }


 }

 function checkCorreo(valor) {
     //var valor = document.getElementById("correo").value;

     if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\./.test(valor))) {
         return false;
     } else {
         return true;
     }

 }

 function checkContrasena(valor) {

     const ptr1 = new RegExp('[A-ZÑ]+');
     const ptr2 = new RegExp('[a-zñ]+');
     const ptr3 = new RegExp('[0-9]+');

     if ((valor.length >= 8) && ptr1.test(valor) && ptr2.test(valor) && ptr3.test(valor)) {
         return true;
     } else {
         return false;
     }

 }

 function checkConfirmContrasena(valor1, valor2) {

     const ptr1 = new RegExp('[A-ZÑ]+');
     const ptr2 = new RegExp('[a-zñ]+');
     const ptr3 = new RegExp('[0-9]+');

     if ((valor1.length >= 8) && ptr1.test(valor1) && ptr2.test(valor1) && ptr3.test(valor1) && (valor1 == valor2)) {
         return true;
     } else {
         return false;
     }

 }

 module.exports.checkUsername = checkUsername;
 module.exports.checkCorreo = checkCorreo;
 module.exports.checkContrasena = checkContrasena;
 module.exports.checkConfirmContrasena = checkConfirmContrasena;