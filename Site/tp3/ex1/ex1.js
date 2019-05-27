function calcular()
{
    var p = [];
    var n = [];

    for (i = 1; i < 9; i++)
    {
        var a = prompt("Digite um número");
        if (a >= 0){
            p.push(a);
        } else{
            n.push(a);
        }
    }
    document.getElementById("saida").innerHTML = "Positivos: " + p + "<br> Negativos: " + n;
}