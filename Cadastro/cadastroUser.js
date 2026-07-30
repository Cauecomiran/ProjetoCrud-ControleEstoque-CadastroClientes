const usuarios=[
  {
    id: 1785072358251,
    user: 'José',
    email: 'jose_reidelas67@gmail.com',
    telefone: '57 4788-8686',
    senha: 'cOxinha123',
  },
  {
    id: 1785072358252,
    user: 'Maria',
    email: 'maria.silva@gmail.com',
    telefone: '11 98765-4321',
    senha: 'm@riaSenha!45',
  },
  {
    id: 1785072358253,
    user: 'Lucas',
    email: 'lucas_dev@outlook.com',
    telefone: '21 99887-1122',
    senha: 'L3monCake#2024',
  },
  {
    id: 1785072358254,
    user: 'Ana',
    email: 'ana.costa@yahoo.com',
    telefone: '31 97654-3210',
    senha: 'aNa_pass99',
  },
  {
    id: 1785072358255,
    user: 'Carlos',
    email: 'carlos.eduardo@hotmail.com',
    telefone: '41 98811-2233',
    senha: 'P@sswordCarlos',
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
    salvarUsuario()
}

function logar(){
    for(let i=0; i<usuarios.length; i++){
        if(document.getElementById('input-usuario').value == usuarios[i].user && document.getElementById('input-senha').value == usuarios[i].senha){
            alert('Login realizado com sucesso!')
            return
        }
    }
    alert('Usuário ou senha incorretos!')
}

function salvarUsuario(){
  localStorage.setItem('Usuários',JSON.stringify(usuarios))

}

function carregarDados(){
    usuarios=JSON.parse(localStorage.getItem('Usuários'))
}

function testes(){
    usuarios=[
  {
    id: 1785072358251,
    user: 'José',
    email: 'jose_reidelas67@gmail.com',
    telefone: '57 4788-8686',
    senha: 'cOxinha123',
  },
  {
    id: 1785072358252,
    user: 'Maria',
    email: 'maria.silva@gmail.com',
    telefone: '11 98765-4321',
    senha: 'm@riaSenha!45',
  },
  {
    id: 1785072358253,
    user: 'Lucas',
    email: 'lucas_dev@outlook.com',
    telefone: '21 99887-1122',
    senha: 'L3monCake#2024',
  },
  {
    id: 1785072358254,
    user: 'Ana',
    email: 'ana.costa@yahoo.com',
    telefone: '31 97654-3210',
    senha: 'aNa_pass99',
  },
  {
    id: 1785072358255,
    user: 'Carlos',
    email: 'carlos.eduardo@hotmail.com',
    telefone: '41 98811-2233',
    senha: 'P@sswordCarlos',
  },
];
}