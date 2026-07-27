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

// mostrar produtos 
function mostrarProdutos(){

    containerProduto.innerHTML = ""

    produtos.forEach((prod, i) =>{

        const botaoCheckBox = document.createElement("input")
        botaoCheckBox.type = "checkbox"
        botaoCheckBox.id = "bt" + i
        botaoCheckBox.className = "botao-checkbox"
        botaoCheckBox.value = i



        const div = document.createElement("div") 
        div.className = "produto-classe"
        div.id = "p" + i

        const botaoEditar = document.createElement("button")
        botaoEditar.className = "botao-editar"
        botaoEditar.innerText = "✏️"
        botaoEditar.onclick = () => { editarProduto(i)}

        


        div.innerHTML =
        ` <span>
        <br> Nome: ${prod.nome} 
        <br> Tamanho: ${prod.tamanho} 
        <br> Custo: ${prod.custo} 
        <br> Valor atacado: ${prod.valorAtacado}
        <br> Valor Varejo: ${prod.valorVarejo} 
        </span>`
        
        div.appendChild(botaoCheckBox)
        div.appendChild(botaoEditar)
        containerProduto.appendChild(div)
        

})

}
mostrarProdutos()
// mostrar pordutos

//============================================================================================

// casdastrar produtos
function cadastrarProdutos() {

    document.getElementById("cadastro-produto-modal").showModal()


}


// salvar produtos
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

// cancelar aterações
function cancelarAddProduto(){
    document.getElementById("cadastro-produto-modal").close()
}
// cadastrar produtos

// ==============================================================================================

// edição de produtos --------->
let idEdição = 0
function editarProduto(id) {
  // identificando o produto que vai ser editado
  idEdição = id

  // chamando a execução do dialog, janela suspensa/modal
  document.getElementById("editar-produto-modal").showModal()

  // escrevendo no input do dialog de edição, para as informações do produto aparecerem
  document.getElementById("input-edicao-nome").value = produtos[idEdição].nome
  document.getElementById("input-edicao-tamanho").value = produtos[idEdição].tamanho
  document.getElementById("input-edicao-custo").value = produtos[idEdição].custo
  document.getElementById("input-edicao-valor-atacado").value = produtos[idEdição].valorAtacado
  document.getElementById("input-edicao-valor-varejo").value = produtos[idEdição].valorVarejo 

}

// salvar edição
function salvarEdicao(){
  // identificando variaveis para facilitar a escrita do codigo
  const nome = document.getElementById("input-edicao-nome")
  const tamanho = document.getElementById("input-edicao-tamanho")
  const custo = document.getElementById("input-edicao-custo")
  const valorAtacado = document.getElementById("input-edicao-valor-atacado")
  const valorVarejo = document.getElementById("input-edicao-valor-varejo")

  // if para extrair informações dos inputs ou retornar um prompt que avisa sobre espaços em branco
  if(nome.value === "" || 
     tamanho.value === "" ||
     custo.value === "" || 
     valorAtacado.value === "" || 
     valorVarejo.value === "")
     {
      alert("espaços em branco")
     }else{
      // extrai as informaçoes e manda para a variavel
      produtos[idEdição].nome = nome.value
      produtos[idEdição].tamanho = tamanho.value
      produtos[idEdição].custo = custo.value
      produtos[idEdição].valorAtacado = valorAtacado.value
      produtos[idEdição].valorVarejo = valorVarejo.value
      // limpar campos para proximas edições
      nome.value = ""
      tamanho.value = ""
      custo.value = ""
      valorAtacado.value = ""
      valorVarejo.value = ""
       
      // atualizar infrmações na tela
        document.getElementById("editar-produto-modal").close()
        mostrarProdutos()
     }
     }

// cancelar ediçao
function cancelarEdicao(){

// fecha o modal/janela suspensa
  document.getElementById("editar-produto-modal").close();
}
// edição de produtos --------->

// ============================================================================

// deletar produtos


