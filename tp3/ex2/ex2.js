function carregar() {
    var t = 0;
    var saida = document.getElementById("saida");
    saida.innerHTML = "Números superiores à 50 e suas posições: <br>"; 

    for (i = 1; i < 9; i++){
        var a = prompt("Digite um número");

        if (a > 50){
            saida.innerHTML += i + " - " + a + "<br>";
        } else{
            t++;
        }
    }


    if (t >= 8){
        saida.innerHTML += "Não há números superiores à 50";
    }
}