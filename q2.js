let divQ2 = document.querySelector("#q2");

let separador2 = document.createElement("div")

separador2.innerHTML = "<hr>"

divQ2.appendChild(separador2);

let h1Q2 = document.createElement("h1")

h1Q2.innerText = "Questão 02";

divQ2.appendChild(h1Q2);

let h2Q2 = document.createElement("h2")

h2Q2.innerText = "Descubra o fatorial de um número e o tempo necessário para realizar este cálculo.";

divQ2.appendChild(h2Q2);

let div_fatorial = document.createElement("div");

let label_fatorial =document.createElement("label");

label_fatorial.textContent = "Calcular o fatorial de: ";

let input_fatorial = document.createElement("input");

input_fatorial.type = "number";

input_fatorial.id = "fat";


let div_botao2 = document.createElement("div");

let botao2 = document.createElement("button");

botao2.innerText = "Calcular";

botao2.addEventListener("click", cliqueQuestao02);

divQ2.appendChild(div_fatorial);
div_fatorial.appendChild(label_fatorial);
div_fatorial.appendChild(input_fatorial);
divQ2.appendChild(div_botao2);
div_botao2.appendChild(botao2);

let div_resQ2 = document.createElement("div");

div_resQ2.id = "resultadoQ2";

divQ2.appendChild(div_resQ2);

function cliqueQuestao02() {
    let n = parseInt(document.getElementById("fat").value);
    let resFatorial = fatorial(n);
    let resTempo = calculaTempo(n);
    document.getElementById("resultadoQ2").innerText = `${n}! = ${resFatorial} (Este cálculo demorou ${resTempo} milissegundos.)`;
}


function fatorial(n){
    let fat = 1;
    for(let i = 1; i < n+1; i++){
        fat *= i;
    }
    return fat;
}

function calculaTempo(n){
    var comeco = new Date().getTime();
    for (i = 0; i < 60000; ++i){
        fatorial(n);
    }
    var fim = new Date().getTime();
    var tempo = fim - comeco;
    return tempo;
}

