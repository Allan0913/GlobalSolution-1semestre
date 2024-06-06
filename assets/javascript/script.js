console.log("executando")

function concluir(id){
    const viagens = JSON.parse(localStorage.getItem("viagens")) || []
    const viagem = viagens.find(viagem => viagem.id == id)
    viagem.status += 100
    

    document.querySelector("#" + id).classList.add("animated")

    document.querySelector("#" + id).addEventListener("animationend", () => {
        document.querySelector("#" + id).remove()
    })

    if(viagem.status > 100) viagem.status = 100

    localStorage.setItem("viagens", JSON.stringify(viagens))

    document.querySelector("#" + id + " progress").value = viagem.status
}

