
const viagens = JSON.parse(localStorage.getItem("viagens")) || [];

viagens
    .filter(viagem => viagem.status < 100)
    .forEach(viagem => Card(viagem));

function Card(viagem){
    const card = document.createElement("article");
    card.id = viagem.id;

    const content = `
        <h6 style="color: black">Lugar: ${viagem.titulo}</h6>
        <p>
            <h6 style="color: black"> Objetivo da viagem:</h6> 
            ${viagem.descricao}
        </p>
        <p>
            <h6 style="color: black"> Quantidades de pessoas: ${viagem.pessoas}</h6>   
        </p>
        <p>
            <h6 style="color: black">Data: ${viagem.data}</h6>
        </p>
        <footer>
            <button style="background-color: red" onclick="apagar('${viagem.id}')">Excluir</button>
            <button style="background-color: green" onclick="concluir('${viagem.id}')">Concluído</button>
        </footer>
    `;

    card.innerHTML = content;
    document.querySelector("#lista").appendChild(card);
}
