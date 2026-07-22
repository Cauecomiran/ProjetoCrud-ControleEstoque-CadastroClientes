const usuarios=[]

function cadastrar(){
    let usuario={
        user: document.getElementById('input-novoUsuario').value,
        email: document.getElementById('input-email').value,
        telefone: document.getElementById('input-telefone').value,
        senha: document.getElementById('input-novaSenha').value,
    }
    usuarios.push(usuario)
    
}