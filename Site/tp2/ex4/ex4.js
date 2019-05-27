function fazer() {
    var tinto = 0;
    var branco = 0;
    var rose = 0;
    var tipo;
    var saida = document.all['saida'];

    for (var i = 0; i < 50; i++){
        tipo = prompt("Digite: \n 1. Tinto \n 2. Branco \n 3. Rose \n 4. Cancelar");
        if (tipo == 1){
            tinto++;
        } else if (tipo == 2){
            branco++;
        } else if (tipo == 3){
            rose++;
        } else{
            break;
        }
    }
    tinto = tinto/50*100;
    branco = branco/50*100;
    rose = rose/50*100;
    saida.innerHTML = "Tinto = " + tinto + "%<br>" + "Branco = " + branco + "%<br>" + "Rose = " + rose + "%<br>";
}