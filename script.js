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


//menu topo
const menuTop = document.querySelector(".menu")

const btnMenu1 = document.createElement("li")
btnMenu1.className = "btn-top"
const a1 = document.createElement("a")
a1.innerHTML ="Lançamentos"

const btnMenu2 = document.createElement("li")
btnMenu2.className = "btn-top"
const a2 = document.createElement("a")
a2.innerHTML ="Pré-Vendas"

const btnMenu3 = document.createElement("li")
btnMenu3.className = "btn-top"
const a3 = document.createElement("a")
a3.innerHTML = "Promoções"

const btnMenu4 = document.createElement("li")
btnMenu4.className = "btn-top"
const a4 = document.createElement("a")
a4.innerHTML = "Contato"

menuTop.append(btnMenu1, btnMenu2, btnMenu3, btnMenu4)
btnMenu1.appendChild(a1)
btnMenu2.appendChild(a2)
btnMenu3.appendChild(a3)
btnMenu4.appendChild(a4)



//template produtos
function template(lista, secProd) {
    

    for(let i = 0; i < lista.length; i++) {
    
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

//carrinho de compra 

let soma = 0

//const cart = document.createElement("div");
const list = document.createElement("ul");

const cart = document.querySelector(".cart")
//.appendChild(cart);
cart.appendChild(list);


const topo = document.createElement("li")
const topo1 = document.createElement("p")
const topo2 = document.createElement("p")

list.appendChild(topo)
topo.append(topo1, topo2)
topo.className = "top-cart"
topo1.innerText = "Item"
topo2.innerText = "Valor"

function somaObject (array) {
    
    for (let key in array) {
        let name = array[key].nome;
        let valor = array[key].preco;
        
        const productList = document.createElement("li");
        productList.className = "cart-item"
        const text1 = document.createElement("p");
        const text2 = document.createElement("p");
        
        list.appendChild(productList);
        productList.appendChild(text1);
        productList.appendChild(text2);

        text1.innerText = name;
        text2.innerText = `R$ ${valor}`;

        soma += valor;
    }
    
      
}

somaObject(product);


const btnFinalizar = document.createElement("button");
const secao = document.createElement("section");
const divSoma = document.createElement("div")
divSoma.className = "div-soma"
const text = document.createElement("p");
const text2 = document.createElement("p");

cart.appendChild(secao);
secao.appendChild(divSoma)
divSoma.append(text, text2);
secao.appendChild(btnFinalizar);

text2.innerText = "Total"
text.innerText = soma.toFixed(2);
btnFinalizar.innerText = "Finalizar";
