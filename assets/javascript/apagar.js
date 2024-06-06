function apagar(id){
    const viagens = JSON.parse( localStorage.getItem("viagens") ) || []
    const viagensAtualizadas = viagens.filter( viagem => viagem.id != id )
    localStorage.setItem("viagens", JSON.stringify(viagensAtualizadas))

    document.querySelector("#" + id).classList.add("animated")

    document.querySelector("#" + id).addEventListener("animationend", () => {
        document.querySelector("#" + id).remove()
    })



}

