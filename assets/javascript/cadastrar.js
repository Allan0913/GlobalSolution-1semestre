function cadastrar() {
    const titulo = document.querySelector("#titulo").value
    const descricao = document.querySelector("#descricao").value
    const pessoas = document.querySelector("#pessoas").value
    const data = document.querySelector("#data").value


    const viagem = {
        id: "id" + new Date().getTime(),
        titulo,
        descricao,
        pessoas,
        data,
        status: 0
    }
    
    console.log(viagem)

    validar(viagem)

    salvar(viagem)

    alert("Cadastrado com sucesso!")
}

function validar(viagem){
    let valido = true
    limparErros()

    if (viagem.titulo == ""){
        document.querySelector("#titulo").ariaInvalid = true
        document.querySelector("#erro-titulo").innerText = "o título é obrigatório"
        valido = false
    }
    if (viagem.descricao == ""){
        document.querySelector("#descricao").ariaInvalid = true
        document.querySelector("#erro-descricao").innerText = "a descrição é obrigatória"
        valido = false
    }
    if (viagem.pessoas < 0){
        document.querySelector("#pessoas").ariaInvalid = true
        document.querySelector("#erro-pessoas").innerText = "pontuação deve ser positiva"
        valido = false
    }
    if (viagem.data == ""){
        document.querySelector("#data").ariaInvalid = true
        document.querySelector("#erro-data").innerText = "A data deve ser válida"
        valido = false
    }

    if(!valido) throw new Error("dados inválidos")
}

const limparErros = function () {
    document.querySelectorAll("input").forEach( input => input.ariaInvalid = false )
    document.querySelectorAll("small").forEach( small => small.innerText = "")
}

function salvar(viagem){
    const viagens = JSON.parse( localStorage.getItem("viagens") ) || []
    viagens.push(viagem)
    localStorage.setItem("viagens", JSON.stringify(viagens))
}