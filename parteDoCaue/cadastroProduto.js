const produtos = [
  {
    nome: "Camiseta Oversized Presta",
    tamanho: "G",
    custo: "25.00",
    id: 1711000000001,
    valorAtacado: "40.00",
    valorVarejo: "65.00",
    categoria: "Vestuário"
  },
  {
    nome: "Tênis Sport Runner",
    tamanho: "41",
    custo: "80.00",
    id: 1711000000002,
    valorAtacado: "120.00",
    valorVarejo: "199.90",
    categoria: "Calçados"
  },
  {
    nome: "Boné Aba Curva",
    tamanho: "Único",
    custo: "12.50",
    id: 1711000000003,
    valorAtacado: "22.00",
    valorVarejo: "45.00",
    categoria: "Acessórios"
  },
 
];

const containerProduto = document.getElementById("container-produto")


function mostrarProdutos(){

    containerProduto.innerHTML = ""

    produtos.forEach((prod, i) =>{

        const div = document.createElement("div") 
        div.className = "produto-classe"
        div.id = "p" + i

        div.innerHTML =  ` Nome: ${prod.nome} 
        <br> Tamanho: ${prod.tamanho} 
        <br> Custo: ${prod.custo} 
        <br> Valor atacado: ${prod.valorAtacado}
        <br> Valor Varejo: ${prod.valorVarejo} `
        
        containerProduto.appendChild(div)

})

}


function cadastrarProdutos() {

    document.getElementById("cadastro-produto-modal").showModal()


}

function salvarProdutos(){
       let produto = {

    nome: document.getElementById("input-nome").value ,
    tamanho: document.getElementById("input-tamanho").value ,
    custo: document.getElementById("input-custo").value ,

    id: Date.now(), 
    
    valorAtacado: document.getElementById("input-valor-atacado").value ,
    valorVarejo:  document.getElementById("input-valor-varejo").value ,

    categoria: "",

    
}

    produtos.push(produto)
    mostrarProdutos()

    document.getElementById("cadastro-produto-modal").close()
}

function cancelarAltProduto(){
    document.getElementById("cadastro-produto-modal").close()
}

