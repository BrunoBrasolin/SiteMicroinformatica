function imprimir() {
    var numero = Number(document.all['numero'].value);
    var saida = document.all['saida'];
    var a = 0, b = 1, temp;

    for (var i = 2; i <= numero; i++) {        
        saida.innerHTML += (a+b) + ", ";
        temp = b;
        b = a + b;
        a = temp;
    }
}