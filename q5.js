let divQ5 = document.querySelector("#q5");

let separador5 = document.createElement("div")

separador5.innerHTML = "<hr>"

divQ5.appendChild(separador5);

let h1Q5 = document.createElement("h1");

h1Q5.innerText = "Questão 05";

divQ5.appendChild(h1Q5);

let h2Q5 = document.createElement("h2");

h2Q5.innerText = "Descubra o tipo de um triângulo, fornecendo os valores de seus lados.";

divQ5.appendChild(h2Q5);

let div_ladoA = document.createElement("div");

let labelA = document.createElement("label");

labelA.innerText = "Lado A: ";

let inputA = document.createElement("input");

inputA.type = "number";

inputA.id = "ladoA";

div_ladoA.appendChild(labelA);

div_ladoA.appendChild(inputA);

divQ5.appendChild(div_ladoA);

let div_ladoB = document.createElement("div");

let labelB = document.createElement("label");

labelB.innerText = "Lado B: ";

let inputB = document.createElement("input");

inputB.type = "number";

inputB.id = "ladoB";

div_ladoB.appendChild(labelB);

div_ladoB.appendChild(inputB);

divQ5.appendChild(div_ladoB);

let div_ladoC = document.createElement("div");

let labelC = document.createElement("label");

labelC.innerText = "Lado C: ";

let inputC = document.createElement("input");

inputC.type = "number";

inputC.id = "ladoC";

div_ladoC.appendChild(labelC);

div_ladoC.appendChild(inputC);

divQ5.appendChild(div_ladoC);

let div_botaoQ5 = document.createElement("div");

divQ5.appendChild(div_botaoQ5);

let botaoQ5 = document.createElement("button");

botaoQ5.innerText = "Calcular";

botaoQ5.addEventListener("click", cliqueQuestao05);

div_botaoQ5.appendChild(botaoQ5);

let div_resQ5 = document.createElement("div");

div_resQ5.id = "resultadoQ5";

divQ5.appendChild(div_resQ5);

function cliqueQuestao05() {
    let ladoA = parseInt(document.getElementById("ladoA").value);
    let ladoB = parseInt(document.getElementById("ladoB").value);
    let ladoC = parseInt(document.getElementById("ladoC").value);
    let respostaQ5 = tipoTriangulo(ladoA, ladoB, ladoC);

    document.getElementById("resultadoQ5").innerText = `O triângulo com lados ${ladoA}, ${ladoB}, ${ladoC} é do tipo ${respostaQ5}.`
}

function tipoTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoA == ladoC){
        return "equilátero";
    }
    else if(ladoA == ladoB && ladoA != ladoC || ladoB == ladoC && ladoB != ladoA || ladoA == ladoC && ladoB != ladoC){
        return "isósceles";
    }
    else {
        return "escaleno";
    }
}

