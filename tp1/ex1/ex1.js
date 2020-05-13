function calcular() {
    var saida = document.all['saida'];
    saida.innerHTML = "";
    var saidaDelta = document.all['saidaDelta'];
    var a = Number(document.all['a'].value);
    var b = Number(document.all['b'].value);
    var c = Number(document.all['c'].value);
    document.all['a1'].textContent = a;
    document.all['b1'].textContent = b;
    document.all['c1'].textContent = c;


    var delta = (b * b) - (4 * c * a);
    saidaDelta.innerHTML = delta;

    if (delta < 0) {
        saida.innerHTML = "Não há raízes reais com delta menor que 0";
    } else if (delta == 0) {
        saida.innerHTML = "Há apenas uma raíz para esta equação: " + (-b) / (2 * a);
    } else if (delta > 0) {
        saida.innerHTML = "Há duas raízes para esta equação: <br/>" +
            "x1 = " + (-b + Math.sqrt(delta)) / (2 * a) +
            " <br/> x2 = " + (-b - Math.sqrt(delta)) / (2 * a);
    }
}