function criar() {
    var p = [];
    var i = [];

    for (j = 1; j < 11; j++){
        var a = prompt("Digite um número");

        if (a % 2 === 0){
            p.push(parseInt(a) + 5);
        } else {
            ni = (Number(a).value * 5);
            i.push(parseInt(a) * 5);
        }

        document.getElementById("saida").innerHTML = "Números pares modificados: " + p + "<br>" + "Números impares modificados: " + i;
    }
}