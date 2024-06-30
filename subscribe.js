function submitToWhatsapp(){
    var name = document.getElementById("name").value
    var phone = document.getElementById("phone").value
    var f_name = document.getElementById("f_name").value
    var l_name = document.getElementById("l_name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    var list = document.getElementById("list").value
    var whatsappurl = "https://wa.me/0271010562?text="
        + "Name of Customer:" + name + "%0a"
        + "Phone Number of Customer:" + phone + "%0a"
        + "First Name of Customer :" + f_name + "%0a"
        + "Last Name of Customer:" + l_name + "%0a"
        + "Email id:" + email + "%0a"
        + "Message :" + message + "%0a"
        + "Selected Department:" + list;

        ;
    window.open(whatsappurl,"_blank").focus();
}