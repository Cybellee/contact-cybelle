(() => {
    emailjs.init({
        publicKey: "wS-7Nwl-QCq28SNKF",
    })
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault()


    emailjs.sendForm("service_ahlrcdg", "template_m4clzq2", this)
    .then(
        () => {
            console.log("Success!")
            alert("Email enviado com sucesso")
        }
    ), function(err) {
        console.log("Fail", err)
        alert("Falha ao enviar o email, tente mais tarde!")
    }
})