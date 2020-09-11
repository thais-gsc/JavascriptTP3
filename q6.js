let divQ6 = document.querySelector("#q6");


let separador6 = document.createElement("div")
separador6.innerHTML = "<hr>"
divQ6.appendChild(separador6);

var cadastros = [];

class usuarioCadastrado{
    constructor(usuario, senha){
    this.usuario = usuario;
    this.senha = senha;
    }
}


// TÍTULOS

let h1Q6 = document.createElement("h1");
h1Q6.innerText = "Questão 06";
divQ6.appendChild(h1Q6);

let h2Q6 = document.createElement("h2");
h2Q6.innerText = "Cadastre-se e faça login na plataforma.";
divQ6.appendChild(h2Q6);

// TÍTULOS


//PÁGINA INICIAL

let div_paginaInicial = document.createElement("div");
divQ6.appendChild(div_paginaInicial);


let div_signIn = document.createElement("div");

let botao_signIn = document.createElement("button");
botao_signIn.innerText = "Fazer Login";
botao_signIn.addEventListener("click", fazerLogin);

div_signIn.appendChild(botao_signIn);
div_paginaInicial.appendChild(div_signIn);


let div_signUp = document.createElement("div");

let botao_signUp = document.createElement("button");
botao_signUp.innerText = "Criar novo usuário";
botao_signUp.addEventListener("click", criarUsuario);

div_signUp.appendChild(botao_signUp);
div_paginaInicial.appendChild(div_signUp);

// PÁGINA INICIAL


//CADASTRO

let div_cadastro = document.createElement("div");

let div_cadastroNome = document.createElement("div");

let div_cadastroSenha = document.createElement("div");

let div_cadastroBotao = document.createElement("div");

let div_cadastroBack = document.createElement("div");

let label_cadastro = document.createElement("label");
label_cadastro.innerText = "Nome de usuário: "

let input_cadastro = document.createElement("input");
input_cadastro.type = "text";
input_cadastro.id = "idUsuario";

div_cadastroNome.appendChild(label_cadastro);

div_cadastroNome.appendChild(input_cadastro);

let label_senha = document.createElement("label");
label_senha.innerText = "Senha: ";

let input_senha = document.createElement("input");
input_senha.type = "password";
input_senha.id = "idSenha";

div_cadastroSenha.appendChild(label_senha);
div_cadastroSenha.appendChild(input_senha);

let botao_cadastro = document.createElement("button");
botao_cadastro.innerText = "Cadastrar-se";
botao_cadastro.addEventListener("click", cadastrarUsuario);

div_cadastroBotao.appendChild(botao_cadastro);

let botao_voltar = document.createElement("button");
botao_voltar.innerText = "Voltar";
botao_voltar.addEventListener("click", paginaInicial);

div_cadastroBack.appendChild(botao_voltar);

div_cadastro.appendChild(div_cadastroNome);
div_cadastro.appendChild(div_cadastroSenha);
div_cadastro.appendChild(div_cadastroBotao);
div_cadastro.appendChild(div_cadastroBack);

divQ6.appendChild(div_cadastro);

div_cadastro.style.display = "none";

// CADASTRO


// LOGIN

let div_login = document.createElement("div");

let div_loginNome = document.createElement("div");

let div_loginSenha = document.createElement("div");

let div_loginBotao = document.createElement("div");

let div_loginBack = document.createElement("div");

let label_login = document.createElement("label");
label_login.innerText = "Nome de usuário: ";

let input_login = document.createElement("input");
input_login.type = "text";
input_login.id = "idLogin";

div_loginNome.appendChild(label_login);
div_loginNome.appendChild(input_login);

let label_pwd = document.createElement("label");
label_pwd.innerText = "Senha: ";

let input_pwd = document.createElement("input");
input_pwd.type = "password";
input_pwd.id = "idPwd";

div_loginSenha.appendChild(label_pwd);
div_loginSenha.appendChild(input_pwd);

let botao_login = document.createElement("button");
botao_login.innerText = "Entrar";
botao_login.addEventListener("click", entrar);

div_loginBotao.appendChild(botao_login);

let botao_voltarLogin = document.createElement("button");
botao_voltarLogin.innerText = "Voltar";
botao_voltarLogin.addEventListener("click", paginaInicial);

div_loginBack.appendChild(botao_voltarLogin);

div_login.appendChild(div_loginNome);
div_login.appendChild(div_loginSenha);
div_login.appendChild(div_loginBotao);
div_login.appendChild(div_loginBack);

divQ6.appendChild(div_login);


div_login.style.display = "none";

// LOGIN


// LOGADO

let div_logado = document.createElement("div");
div_logado.innerText = "Login realizado com sucesso. \n\n";

let div_botaoLogout = document.createElement("div");

let botao_logout = document.createElement("button");
botao_logout.innerText = "Logout";
botao_logout.addEventListener("click", paginaInicial);

div_botaoLogout.appendChild(botao_logout);

div_logado.appendChild(div_botaoLogout);
divQ6.appendChild(div_logado);

div_logado.style.display = "none";

// LOGADO


function criarUsuario(){
    div_paginaInicial.style.display = "none";
    div_cadastro.style.display = "block";
}

function paginaInicial() {
    div_logado.style.display = "none";
    div_cadastro.style.display = "none";
    div_login.style.display = "none";
    div_paginaInicial.style.display = "block";
}

function cadastrarUsuario(){
    var novoUsuario = document.getElementById("idUsuario").value;
    var novaSenha = document.getElementById("idSenha").value;
    var cadastro = new usuarioCadastrado(novoUsuario, novaSenha);
    let repete = false;
    let  i = 0;
    while(repete == false && i < cadastros.length){
        if(cadastro.usuario ==  cadastros[i].usuario){
            repete = true;
        }
        i++;
    }
    if(repete == false){
        cadastros.push(cadastro);
        window.alert("Nome de usuário e senha cadastrados!")
        div_login.style.display = "block";
        div_cadastro.style.display = "none";
    } else {
        window.alert("Este nome de usuário já existe. Favor informar outro.")
    }
}

function fazerLogin() {
    div_paginaInicial.style.display = "none";
    div_login.style.display = "block";
}

function entrar() {
    let nome_usuario = document.getElementById("idLogin").value;
    let senha_usuario = document.getElementById("idPwd").value;
    for(let j = 0; j < cadastros.length; j++){
        if(cadastros[j].usuario.includes(nome_usuario) && cadastros[j].senha.includes(senha_usuario)){
            div_login.style.display = "none";
            div_logado.style.display = "block";
        }
        else {
            window.alert("Nome de usuário ou senha inválidos");
        }
    }
}

