const usuarios=[{
    id: 1785072358251,
    user: 'José',
    email: 'jose_reidelas67@gmail.com',
    telefone: '57 4788-8686',
    senha: 'cOxinha123',
},
]

function cadastrar(){
    let usuario={
        id: Date.now(),
        user: document.getElementById('input-novoUsuario').value,
        email: document.getElementById('input-email').value,
        telefone: document.getElementById('input-telefone').value,
        senha: document.getElementById('input-novaSenha').value,
    }
    usuarios.push(usuario)
    
}