function media() {
    var nota1 = Number(document.all['nota1'].value);
    document.all['nota11'].textContent = nota1;
    var nota2 = Number(document.all['nota2'].value);
    document.all['nota21'].textContent = nota2;
    var nota3 = Number(document.all['nota3'].value);
    document.all['nota31'].textContent = nota3;
    nota11.innerHTML = nota1;
    nota21.innerHTML = nota2;
    nota31.innerHTML = nota3;

    var media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;
    document.all['mediap'].textContent = media;
    var conceito;
    var conceitop = document.all['conceitop'];


    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        alert("Reveja suas notas, há algo de errado");
        location.href = 'ex2.html';
    } else if (media >= 8 && media <= 10) {
        conceito = "A";
        conceitop.innerHTML = conceito;
    } else if (media >= 7 && media <= 7.9) {
        conceito = "B";
        conceitop.innerHTML = conceito;
    } else if (media >= 6 && media <= 6.9) {
        conceito = "C";
        conceitop.innerHTML = conceito;
    } else if (media >= 5 && media <= 5.99) {
        conceito = "D";
        conceitop.innerHTML = conceito;
    } else if (media >= 0 && media <= 4.99) {
        conceito = "E"
        conceitop.innerHTML = conceito;
    }


}