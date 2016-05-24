function validateContactData(name, email, message) {
    var checkEmail = /^\w+@[a-zA-Z_]+?\.[a-z]{2,3}$/;
    var checkName = /^[A-ZÓÜÖÚŐŰÁÉÍa-zóüöúőűáéí ]+$/
    var checkMessage = /^[A-ZÓÜÖÚŐŰÁÉÍa-zóüöúőűáéí ]{20,500}/
    return checkEmail.exec(email) && checkName.exec(name) && checkMessage.exec(message);
}
function sendMessage() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    if (validateContactData(name.value, email.value, message.value)) {
        alert("Thanks for contacted with me!");
    } else {
        alert("You give one of the information incorrectly! Please check!");
    }
}