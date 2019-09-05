function validation() {
    var name = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var email_address = document.getElementById("email-address").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error-message");
    var text;
    // alert(name);
    error_message.style.padding = "10px";

    if (name.length < 4) {
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if (title.length < 6) {
        text = "Please Enter A Title";
        error_message.innerHTML = text;
        return false;
    }

    if (email_address.indexOf("@") == -1 || email_address.length < 6) {
        text = "Please Enter Email";
        error_message.innerHTML = text;
        return false;
    }

    if (email_address.length == "") {
        text = "Please Do Enter yourEmail";
        error_message.innerHTML = text;
        return false;
    }

    if (message.length < 20) {
        text = "Please Enter More than 20 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully")
    return true;
}