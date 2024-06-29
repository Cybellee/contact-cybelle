
    emailjs.init ({
        publicKey: "wS-7Nwl-QCq28SNKF"
    })

function handleEmail () {

    let templateParams = {
        name: "Lala",
        user_email: "contatovaladao14@gmail.com",
        from_name: "Suporte de Fãs",
        message: "Conteúdo da mensagem aqui..."
    }

    emailjs.send("service_ahlrcdg", "template_p7yqo6q", templateParams)
        .then(function(response) {
            console.log("Email enviado com sucesso!", response.status, response.text ) 
        }), function (error) {
            console.error("Erro ao enviar o email", error)
        }

}
