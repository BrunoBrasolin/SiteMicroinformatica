function verificar() {
    var numero = Number(document.all['numero'].value);
    var saidanumero = document.all['saidanumero'];
    var saida = document.all['saida'];
    saidanumero.innerHTML = numero;


    if (numero == 2 || numero == 3 || numero == 5 || numero == 7 || numero == 11 || numero == 13 ){
        saida.innerHTML = "Primo";
    }
    else if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0 || numero % 11 == 0 || numero % 13 == 0){
        saida.innerHTML = "não é Primo"
    }
    else{
        saida.innerHTML = "Primo"
    }
}