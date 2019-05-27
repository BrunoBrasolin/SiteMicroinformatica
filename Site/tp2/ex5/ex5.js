function fatorial() {
    var numero = Number(document.all['numero'].value);
    var saida = document.all['saida'];
    var saidanumero = document.all['saidanumero'];
    saidanumero.innerHTML = numero;
    for (var i = numero; i > 1; i--){
        numero *= i - 1;
    }
    saida.innerHTML = numero;
}