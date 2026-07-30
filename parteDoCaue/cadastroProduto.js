let produtos = []

let categorias = []

////

const containerProduto = document.getElementById("container-produto")
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
        <br> Quantidade : ${prod.qtd}
        </span>`
        
        div.appendChild(botaoCheckBox)
        div.appendChild(botaoEditar)
        containerProduto.appendChild(div)
}) 
}
/////
function abrirCadastro() {
    document.getElementById("cadastro-produto-modal").showModal()
};
////
function fecharCadastro(){
    document.getElementById("cadastro-produto-modal").close();
}
////
function salvarCadastro(){
carregarDados()
  if(document.getElementById("input-nome").value  == ''||
    document.getElementById("input-tamanho").value == ''||
    document.getElementById("input-custo").value == ''||
    document.getElementById("input-valor-atacado").value == ''||
    document.getElementById("input-valor-varejo").value == ''||
    document.getElementById("select-categoria-cadastro").value == ''||
    document.getElementById("input-qtd").value == ''){

      alert("espaços em branco!!!")

    }else{
    let produto = {

      nome: document.getElementById("input-nome").value ,
      tamanho: document.getElementById("input-tamanho").value ,
      custo: document.getElementById("input-custo").value ,

      id: Date.now(), 
      
      valorAtacado: document.getElementById("input-valor-atacado").value ,
      valorVarejo:  document.getElementById("input-valor-varejo").value ,

      categoria: document.getElementById("select-categoria-cadastro").value,

      qtd: document.getElementById("input-qtd").value

    }
    produtos.push(produto)
    
    document.getElementById("input-nome").value  = ''
    document.getElementById("input-tamanho").value = ''
    document.getElementById("input-custo").value = ''
    document.getElementById("input-valor-atacado").value = ''
    document.getElementById("input-valor-varejo").value = ''
    document.getElementById("select-categoria-cadastro").value = ''
    document.getElementById("input-qtd").value = ''

    document.getElementById("cadastro-produto-modal").close()

  atualizarTela()
salvarDados()
  }
}
////
function cancelarAddProduto(){
    document.getElementById("cadastro-produto-modal").close()
}
//////
function editarProduto(idParaEdicao) {
  carregarDados()

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
        document.getElementById("input-edicao-qtd").value = produto.qtd
        
        posicaoProd = i
    }
  })
  atualizarTela()
  salvarDados()
}
//////
function salvarEdicao(){
  carregarDados()

  // identificando variaveis para facilitar a escrita do codigo
  const nome = document.getElementById("input-edicao-nome")
  const tamanho = document.getElementById("input-edicao-tamanho")
  const custo = document.getElementById("input-edicao-custo")
  const valorAtacado = document.getElementById("input-edicao-valor-atacado")
  const valorVarejo = document.getElementById("input-edicao-valor-varejo")
  const qtd = document.getElementById("input-edicao-qtd")

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
      produtos[posicaoProd].valorVarejo = qtd.value
      // limpar campos para proximas edições
      nome.value = ""
      tamanho.value = ""
      custo.value = ""
      valorAtacado.value = ""
      valorVarejo.value = ""
      qtd.value = ""
       
      // atualizar infrmações na tela
        document.getElementById("editar-produto-modal").close()
        atualizarTela()
     }
     salvarDados()
     }
/////
function cancelarEdicao(){

// fecha o modal/janela suspensa
  document.getElementById("editar-produto-modal").close();
}
/////
function excluirProdutos(){
carregarDados()
  let  btCheckbox = document.getElementsByClassName("botao-checkbox")

  let produtosParaExcluir = []

  for( let i = 0; i<btCheckbox.length; i++ ){

    if(btCheckbox[i].checked){
      produtosParaExcluir.push(Number(btCheckbox[i].id.replace("bt", "")))
    }

  }
  
  console.log(produtosParaExcluir)



  for( let i = 0; i<produtosParaExcluir.length; i++){

    produtos = produtos.filter(prod => prod.id !== produtosParaExcluir[i] )

    // produtosParaExcluir[i]

  }

  console.log(produtos)
  atualizarTela()
salvarDados()
}
/////
function abrirCadastroCat(){
  document.getElementById("addCategoria").showModal()
}

function cancelarCadastroCat(){
  document.getElementById("addCategoria").close()
}

function salvarCadastroCat(){
carregarDados()
  let cat = {
   nomeCategoria: document.getElementById("input-categoria-modal").value,
   idCat: Date.now() / 10 }

    categorias.push(cat)

    document.getElementById("input-categoria-modal").value = ''
    document.getElementById("addCategoria").close()
    atualizarTela()
salvarDados()
}

/////
const containerCategoria = document.getElementById("container-categoria")
function mostrarCategorias(){
containerCategoria.innerHTML = ""
  categorias.forEach(cat => {

  const categoriaCheckBox = document.createElement("input")
  categoriaCheckBox.type = "checkbox"
  categoriaCheckBox.id = "bt" + cat.idCat
  categoriaCheckBox.className = "categoria-checkBox"
  categoriaCheckBox.value = cat.idCat

  const editarCategoria = document.createElement("button")
  editarCategoria.className = "categoriaEditar"
  editarCategoria.innerText = "✏️"
  editarCategoria.onclick = () => { botaoEditarCategoria(cat.idCat)}
  

  const div = document.createElement("div")
  div.id = "cat" + cat.idCat
  div.className = "categoria-class"
  div.innerHTML = `<span> Categoria: ${cat.nomeCategoria}`

  div.appendChild(editarCategoria)
  div.appendChild(categoriaCheckBox)
  containerCategoria.appendChild(div)
})
}

/////
function mostrarCategoriaFiltro(){

    let selectFilto = document.getElementById("select-categoria-filtro")

    selectFilto.innerText =""
    selectFilto.innerHTML =""

    categorias.forEach((cat,i) => {

      const opcaoCat = document.createElement("option")
      
      opcaoCat.id = "opt" + i
      opcaoCat.className = "option-classe"
      opcaoCat.text = cat.nomeCategoria


      selectFilto.appendChild(opcaoCat)
    })
    
  }
/////
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
////
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
}
}
////
let indiceEditar
function botaoEditarCategoria(idParaEditar){

    categorias.forEach((cat,i) => {

    if(idParaEditar === cat.idCat){
      document.getElementById("editar-categoria-input").value = cat.nomeCategoria
      indiceEditar = i 
    }

  })

  document.getElementById("editar-categoria-modal").showModal()
  atualizarTela()
}
////
function salvarEdicaoCat(){
  carregarDados()

  produtos.forEach(prod => {

    if(prod.categoria === categorias[indiceEditar].nomeCategoria){
      prod.categoria = document.getElementById("editar-categoria-input").value
    }


  })

  categorias[indiceEditar].nomeCategoria = document.getElementById("editar-categoria-input").value



  document.getElementById("editar-categoria-modal").close()
  atualizarTela()
salvarDados()
}
////
function cancelarEdicaoCat(){
  document.getElementById("editar-categoria-modal").close()
}
//////
function excluirCategoria(){
carregarDados()
  let btCheckbox = document.getElementsByClassName("categoria-checkBox")

  let categoriasParaExcluir = []

  for( let i = 0; i<btCheckbox.length; i++ ){

    if(btCheckbox[i].checked){
      
      categoriasParaExcluir.push(Number(btCheckbox[i].id.replace("bt", "")))
    }

  }
  
  console.log(categoriasParaExcluir)


  for( let i = 0; i<categoriasParaExcluir.length; i++){
    categorias = categorias.filter(cat => Number(cat.idCat) !== categoriasParaExcluir[i])
  }

  produtos.forEach( prod => {

    categorias.forEach(cat =>{

      if(cat.nomeCategoria === prod.categoria){
      
      }else{
        prod.categoria = ""
      }
    })

  })
atualizarTela()
salvarDados()
}


function atualizarTela(){
  mostrarProdutos()
  mostrarCategoriaCadastro()
  mostrarCategoriaFiltro()
  mostrarCategorias()
}

carregarDados()
atualizarTela()


function salvarDados(){
  localStorage.setItem("produtos", JSON.stringify(produtos));
  localStorage.setItem("categorias", JSON.stringify(categorias));
}

function carregarDados(){
  produtos = JSON.parse(localStorage.getItem("produtos")) || []
  categorias = JSON.parse(localStorage.getItem("categorias")) || []
}