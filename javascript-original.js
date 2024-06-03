  let valor = -1;
function Trocar(){
    if(valor <=7){
        valor+=1;
    }else{
        valor=0
    }

    

    let destaque =[
        "Army of the dead lost vegas",
        "Invisible",
        "Peacemaker",
        "Punisher",
        "The boys",
        "The walking dead",
        "Jhon wich",
        "jurassik park",
        "Liga da justica"
    ]

    // ADICIONAR DIV
    document.getElementById('exibicao').innerHTML+= `<div id='opcao${valor}' class='serie_filme${valor} destaque_vitrine' title='${destaque[valor]}'></div>`


    // REMOVER CLASSE
    minhaDiv = document.getElementById(`opcao${valor}`);
    // Verifica se a div existe
    // Remove a div do DOM
    minhaDiv.remove();

}

setInterval(Trocar,5000)