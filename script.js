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
separateItens(itens)

function template(lista, secProd) {
    console.log("ola")

    for(let i = 0; i < lista.length; i++) {
        //console.log(listFigures[i].type)
    
        const produtos = document.querySelector(secProd)
    
        const card = document.createElement("li")
        card.className = "card"
        const img = document.createElement("img")
        img.src = lista[i].image
        img.alt = "foto do produto"
    
        const span = document.createElement("span")
        span.innerText = lista[i].name
        const p = document.createElement("p")
        p.innerHTML = lista[i].price
        const button = document.createElement("button")
        button.innerText = "Reservar"
    
        produtos.appendChild(card)
        card.append(img, span, p, button)
    
    
    }

    
}
template(listFigures, ".products")
template(listFrames, ".products2")


