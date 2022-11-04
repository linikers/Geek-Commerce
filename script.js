const listFigures = []
const listFrames = []
//função para separar itens
function separateItens(itens) {
    
    for(let i = 0; i < itens.length; i++){
        
        if(itens[i].type == 'quadro'){
            listFigures.push(itens[i])
        }
        else if(itens[i].type == 'actions') {
            listFrames.push(itens[i])
        }

    }
    
}

console.log("Olá sou o arquivo script")