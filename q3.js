let divQ3 = document.querySelector("#q3");

let separador3 = document.createElement("div")

separador3.innerHTML = "<hr>"

divQ3.appendChild(separador3);

let h1Q3 = document.createElement("h1");
h1Q3.innerText = "Questão 03";

divQ3.appendChild(h1Q3);

let h2Q3 = document.createElement("h2");
h2Q3.innerText = "Relatório de notas da disciplina Javascript";

divQ3.appendChild(h2Q3);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let div_botaoQ3 = document.createElement("div");

let botaoQ3 = document.createElement("button");

botaoQ3.innerText = "Criar Relatório";

botaoQ3.addEventListener("click", criarRelatorio);

div_botaoQ3.appendChild(botaoQ3);

divQ3.appendChild(div_botaoQ3);

function criarRelatorio(){
    var div_titulo = document.createElement("div");
    
    divQ3.appendChild(div_titulo);

    const numAlunos = 20;

    var notas = [];

    for(let i = 0; i < numAlunos; i++) {
        notas.push(getRandomInt(0,101));
    }

    var registros = [];

    var numChamada = 1;

    for(nota of notas){
        registros.push([numChamada, nota]);
        numChamada++;
    }

    var aprovados = 0;

    var divAlunos = document.createElement("div");

    divQ3.appendChild(divAlunos);


    for(var registro of registros){
        if(registro[1] >= 60){
            var situacao = "APROVADO";
            aprovados++;
        }
        else {
            var situacao = "REPROVADO";
        }
        var div_aluno = document.createElement("div");

        var div_numero = document.createElement("div");
        div_numero.innerText = registro[0];
        div_numero.style = "float: left; width: 33%;"

        var div_notas = document.createElement("div");
        div_notas.innerText = registro[1];
        div_notas.style = "float: left; width: 33%;"

        var div_situacao = document.createElement("div");
        div_situacao.innerText = situacao;
        div_situacao.style = "float; left; width = 34%;"

        div_aluno.appendChild(div_numero);
        div_aluno.appendChild(div_notas);
        div_aluno.appendChild(div_situacao);

        divAlunos.appendChild(div_aluno);
    }

    var reprovados = numAlunos - aprovados;

    var div_estatistica = document.createElement("div");

    div_estatistica.innerText = `APROVADOS: ${aprovados} (${aprovados*5}%) | REPROVADOS: ${reprovados} (${reprovados*5}%)`;

    divQ3.appendChild(div_estatistica);
}