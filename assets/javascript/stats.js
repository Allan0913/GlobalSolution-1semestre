
const totalPendentes = viagens
                            .filter( t => t.status < 100)
                            .length

document.querySelector("#stats-pending span").innerText = totalPendentes

const totalConcluidas = viagens  
                            .filter( t => t.status == 100)
                            .length
                            
document.querySelector("#stats-done span").innerText = totalConcluidas


const totalPessoas = viagens.reduce((soma, t) => soma += Number(t.status), 0)
document.querySelector("#stats-total span").innerText = totalPessoas

                    

