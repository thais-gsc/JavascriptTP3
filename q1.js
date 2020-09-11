let divQ1 = document.querySelector("#q1");

let h1Q1 = document.createElement("h1");

h1Q1.innerText = "Questão 01";

let h2Q1 = document.createElement("h2");

h2Q1.innerText = "Descubra quantos múltiplos em comum de 2 e 3 existem em um intervalo.";

let div_min = document.createElement("div");

let div_max = document.createElement("div");

let div_btn = document.createElement("div");

let div_res = document.createElement("div");

div_res.id = "resultadoQ1";


let label_min = document.createElement("label");

label_min.textContent = "Valor mínimo: ";

let input_min = document.createElement("input");

input_min.type = "number";

input_min.id = "min";


let label_max = document.createElement("label2");

label_max.textContent = "Valor máximo: ";

let input_max = document.createElement("input");

input_max.type = "number";

input_max.id = "max";


let btn = document.createElement("button");

btn.innerText = "Calcular";

btn.addEventListener("click", cliqueQuestao01);


divQ1.appendChild(h1Q1);
divQ1.appendChild(h2Q1);
divQ1.appendChild(div_min);
divQ1.appendChild(div_max);
divQ1.appendChild(div_btn);
divQ1.appendChild(div_res);

div_min.appendChild(label_min);
div_min.appendChild(input_min);

div_max.appendChild(label_max);
div_max.appendChild(input_max);

div_btn.appendChild(btn);


function cliqueQuestao01() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let res = calcularMultiplos(min,max);
    document.getElementById("resultadoQ1").innerText = `Entre ${min} e ${max} existem ${res} múltiplos de 2 e 3 simultaneamente.`;
}

var min = 0;
var max = 1000000;

function calcularMultiplos(min, max){
    let resultado = 0;
    for(let i = min + 1; i < max; i++){
        if((i % 2 == 0) && (i % 3 == 0)){
            resultado++; 
        }
    }
    return resultado;
}