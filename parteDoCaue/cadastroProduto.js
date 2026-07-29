let produtos = [
  {
    nome: "Camiseta Oversized Presta",
    tamanho: "G",
    custo: "25.00",
    id: 1711000000001,
    valorAtacado: "40.00",
    valorVarejo: "65.00",
    categoria: "Vestuário",
    qtd: 0
  },
  {
    nome: "Tênis Sport Runner",
    tamanho: "41",
    custo: "80.00",
    id: 1711000000002,
    valorAtacado: "120.00",
    valorVarejo: "199.90",
    categoria: "Calçados",
    qtd: 0
  },
  {
    nome: "Boné Aba Curva",
    tamanho: "Único",
    custo: "12.50",
    id: 1711000000003,
    valorAtacado: "22.00",
    valorVarejo: "45.00",
    categoria: "Acessórios",
    qtd: 0
  },
 
];

const categorias = [
  {
    nomeCategoria: "camiseta",
    idCat: 1
  },
  {
    nomeCategoria: "blusa",
    idCat: 2
  },
  {
    nomeCategoria: "calça",
    idCat: 3
  },
];

const containerProduto = document.getElementById("container-produto")

// mostrar produtos 
function mostrarProdutos(){
    containerProduto.innerHTML = ""

    produtos.forEach((prod) =>{

        const botaoCheckBox = document.createElement("input")
        botaoCheckBox.type = "checkbox"
        botaoCheckBox.id = "bt" + prod.id
        botaoCheckBox.className = "botao-checkbox"
        botaoCheckBox.value = prod.id
//////////////////////////////////////////
        const div = document.createElement("div") 
        div.className = "produto-classe"
        div.id = "p" + prod.id

        const botaoEditar = document.createElement("button")
        botaoEditar.className = "botao-editar"
        botaoEditar.innerText = "✏️"
        botaoEditar.onclick = () => { editarProduto(prod.id)}
///////////////////////////////////////////////
        div.innerHTML =
        ` <span>
        <br> Nome: ${prod.nome} 
        <br> Tamanho: ${prod.tamanho} 
        <br> Custo: ${prod.custo} 
        <br> Valor atacado: ${prod.valorAtacado}
        <br> Valor Varejo: ${prod.valorVarejo}
        <br> Categoria: ${prod.categoria} 
        <br> id : ${prod.id}
        </span>`
        
        div.appendChild(botaoCheckBox)
        div.appendChild(botaoEditar)
        containerProduto.appendChild(div)
}) 
}
mostrarProdutos()

function mostrarCategoriaFiltro(){

    let selectFilto = document.getElementById("select-categoria-filtro")

    categorias.forEach((cat,i) => {

      const opcaoCat = document.createElement("option")
      
      opcaoCat.id = "opt" + i
      opcaoCat.className = "option-classe"
      opcaoCat.text = cat.nomeCategoria


      selectFilto.appendChild(opcaoCat)
    })
    
  }
mostrarCategoriaFiltro()

function mostrarCategoriaCadastro(){

    let selectCadastro = document.getElementById("select-categoria-cadastro")

    categorias.forEach((cat,i) => {

      const opcaoCat = document.createElement("option")
      
      opcaoCat.id = "opt" + i
      opcaoCat.className = "option-classe"
      opcaoCat.text = cat.nomeCategoria


      selectCadastro.appendChild(opcaoCat)
    })
    
  }
mostrarCategoriaCadastro()


function filtrarProdutos(){
 let filtroCategoria = document.getElementById("select-categoria-filtro")

  console.log(produtos)
  
  containerProduto.innerHTML = ""

  for(i = 0; i < produtos.length; i++){

    if(produtos[i].categoria === filtroCategoria.value){

        const botaoCheckBox = document.createElement("input")
        botaoCheckBox.type = "checkbox"
        botaoCheckBox.id = "bt" + produtos[i].id
        botaoCheckBox.className = "botao-checkbox"
        botaoCheckBox.value = produtos[i].id
//////////////////////////////////////////
        const div = document.createElement("div") 
        div.className = "produto-classe"
        div.id = "p" + produtos[i].id

        const botaoEditar = document.createElement("button")
        botaoEditar.className = "botao-editar"
        botaoEditar.innerText = "✏️"
        botaoEditar.onclick = () => { editarProduto(produtos[i].id)}
///////////////////////////////////////////////
        div.innerHTML =
        ` <span>
        <br> Nome: ${produtos[i].nome} 
        <br> Tamanho: ${produtos[i].tamanho} 
        <br> Custo: ${produtos[i].custo} 
        <br> Valor atacado: ${produtos[i].valorAtacado}
        <br> Valor Varejo: ${produtos[i].valorVarejo}
        <br> Categoria: ${produtos[i].categoria} 
        <br> id : ${produtos[i].id}
        </span>`
        
        div.appendChild(botaoCheckBox)
        div.appendChild(botaoEditar)
        containerProduto.appendChild(div);
  }
}}
// mostrar pordutos


//============================================================================================

// casdastrar produtos
function abrirCadastro() {
    document.getElementById("cadastro-produto-modal").showModal()
};

function fecharCadastro(){
    document.getElementById("cadastro-produto-modal").close();
}


// salvar produtos
function salvarCadastro(){
    let produto = {

      nome: document.getElementById("input-nome").value ,
      tamanho: document.getElementById("input-tamanho").value ,
      custo: document.getElementById("input-custo").value ,

      id: Date.now(), 
      
      valorAtacado: document.getElementById("input-valor-atacado").value ,
      valorVarejo:  document.getElementById("input-valor-varejo").value ,

      categoria: document.getElementById("select-categoria-cadastro").value

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
function editarProduto(idParaEdicao) {

// chamando a execução do dialog, janela suspensa/modal
  document.getElementById("editar-produto-modal").showModal()


  // identificando o produto que vai ser editado
  produtos.forEach((produto, i) => {
    if(idParaEdicao == produto.id ){
  // escrevendo no input do dialog de edição, para as informações do produto aparecerem
        document.getElementById("input-edicao-nome").value = produto.nome
        document.getElementById("input-edicao-tamanho").value = produto.tamanho
        document.getElementById("input-edicao-custo").value = produto.custo
        document.getElementById("input-edicao-valor-atacado").value = produto.valorAtacado
        document.getElementById("input-edicao-valor-varejo").value = produto.valorVarejo
        
        posicaoProd = i
    }
  })
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
      // extrai as informaçoes e manda para a variave
      // l
      produtos[posicaoProd].nome = nome.value
      produtos[posicaoProd].tamanho = tamanho.value
      produtos[posicaoProd].custo = custo.value
      produtos[posicaoProd].valorAtacado = valorAtacado.value
      produtos[posicaoProd].valorVarejo = valorVarejo.value
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
function excluirProdutos(){

  let  btCheckbox = document.getElementsByClassName("botao-checkbox")

  let produtosParaExcluir = []

  for( i = 0; i<btCheckbox.length; i++ ){

    if(btCheckbox[i].checked){
      produtosParaExcluir.push(Number(btCheckbox[i].id.replace("bt", "")))
    }

  }
  
  console.log(produtosParaExcluir)



  for(i = 0; i<produtosParaExcluir.length; i++){

    produtos = produtos.filter(prod => prod.id !== produtosParaExcluir[i] )

    // produtosParaExcluir[i]

  }

  console.log(produtos)
  mostrarProdutos()
}



function addCat(){
  document.getElementById("addCategoria").showModal()
  
}