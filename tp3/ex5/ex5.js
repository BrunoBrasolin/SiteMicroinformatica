function imprimir() {
    var a = [];
    var q = 0;

    for(i = 1; i < 10; i++){
        a[i] = prompt("Digite um número");
        if (a[i] == 0){
            break;
        }
        if (a[i] == a[i-1]){
            q++;
        }
    }
    document.getElementById("saida").innerHTML = "Quantidade de número repetido: " + q;
}