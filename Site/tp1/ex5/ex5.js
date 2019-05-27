var num1 = document.all['num1'];
var num2 = document.all['num2'];
var tipo = document.all['tipo'];
var somar = document.all['somar'];
var calsoma = document.all['calcularsoma']
var calraiz = document.all['calcularraiz']
num1.style.visibility = 'hidden';
num2.style.visibility = 'hidden';
calsoma.style.visibility = 'hidden';
calraiz.style.visibility = 'hidden';
var saida = document.all['saida'];

function atualizar() {
    if (somar.checked == true) {
        num1.style.visibility = 'visible';
        num2.style.visibility = 'visible';
        calsoma.style.visibility = 'visible';
        calraiz.style.visibility = 'hidden';
        saida.innerHTML = "";

        tipo.innerHTML = "Resultado da Soma: ";
    } else if (raiz.checked == true) {
        num1.style.visibility = 'visible';
        num2.style.visibility = 'hidden';
        calsoma.style.visibility = 'hidden';
        calraiz.style.visibility = 'visible';
        saida.innerHTML = "";

        tipo.innerHTML = "Resultado da Raiz: ";
    }
}

function calcularraiz() {
    saida.innerHTML = Math.sqrt(num1.value);
}

function calcularsoma() {
    saida.innerHTML = (parseInt(num1.value) + parseInt(num2.value));
}