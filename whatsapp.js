
function sendToWhatsapp(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    var whatsappurl = "https://wa.me/0271010562?text="
    + "Name of Customer:"+ name +"%0a"
    + "Email id:" + email + "%0a"
    + "Message:" + message;
    window.open(whatsappurl,"_blank").focus();
}