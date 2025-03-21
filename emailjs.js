
function sendMail() {
    let parms = {

        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        mobile_number :document.getElementById("mobile_number").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,

    }

    emailjs.send("service_b5lskke","template_ajtkh7z",parms).then(alert("Email Sent!!"))

}




