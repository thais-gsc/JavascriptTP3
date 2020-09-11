let divQ4 = document.querySelector("#q4");

let separador4 = document.createElement("div")

separador4.innerHTML = "<hr>"

divQ4.appendChild(separador4);

let h1Q4 = document.createElement("h1");

h1Q4.innerText = "Questão 04";

divQ4.appendChild(h1Q4);

let h2Q4 = document.createElement("h2");

h2Q4.innerText = "Obtenha uma lista com uma quantidade de números aleatórios, ordenados e sem repetições.";

divQ4.appendChild(h2Q4);

div_qtd = document.createElement("div");

div_qtd.id = "divqtd"

let label_qtd = document.createElement("label")

label_qtd.innerText = "Quantidade de números: "

let input_qtd = document.createElement("input");

input_qtd.type = "number";

input_qtd.id = "qtd";

div_qtd.appendChild(label_qtd);

div_qtd.appendChild(input_qtd);

div_vmin = document.createElement("div");

let label_vmin = document.createElement("label")

label_vmin.innerText = "Valor mínimo: ";

let input_vmin = document.createElement("input");

input_vmin.type = "number";

input_vmin.id = "vmin";

div_vmin.appendChild(label_vmin);

div_vmin.appendChild(input_vmin);

div_vmax = document.createElement("div");

let label_vmax = document.createElement("label");

label_vmax.innerText = "Valor máximo: ";

let input_vmax = document.createElement("input");

input_vmax.type = "number";

input_vmax.id = "vmax";

div_vmax.appendChild(label_vmax);

div_vmax.appendChild(input_vmax);

div_botaoQ4 = document.createElement("div");

botaoQ4 = document.createElement("button");

botaoQ4.innerText = "Calcular";

botaoQ4.addEventListener("click", cliqueQuestao04);

div_botaoQ4.appendChild(botaoQ4);

divQ4.appendChild(div_qtd);

divQ4.appendChild(div_vmin);

divQ4.appendChild(div_vmax);

divQ4.appendChild(div_botaoQ4);

let div_resQ4 = document.createElement("div");

div_resQ4.id = "resultadoQ4";

divQ4.appendChild(div_resQ4);



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function ordenarNumeros(qtd, vmin, vmax){
    var lista = [];
    while(lista.length < qtd){
        lista.push(getRandomInt(vmin,vmax + 1));
        var lista = [...new Set(lista)];
    }
    lista.sort(function(a, b){return a - b});
    return lista;
}

function cliqueQuestao04() {
    let qtd = parseInt(document.getElementById("qtd").value);
    let vmin = parseInt(document.getElementById("vmin").value);
    let vmax = parseInt(document.getElementById("vmax").value);

    if (qtd > (vmax - vmin)){
        window.alert("Quantidade inválida, por favor informe uma quantidade de números menor ou igual à diferença entre os valores máximo e mínimo.")
    } else{
    document.getElementById("resultadoQ4").innerText = `${ordenarNumeros(qtd, vmin, vmax)}`}
}



