function determinar() {
    var dia1 = document.all['dia1'].value;
    document.all['dia11'].textContent = dia1;
    var mes1 = document.all['mes1'].value;
    document.all['mes11'].textContent = mes1;
    var ano1 = document.all['ano1'].value;
    document.all['ano11'].textContent = ano1;

    var data1 = dia1 + "/" + mes1 + "/" + ano1;


    var dia2 = document.all['dia2'].value;
    document.all['dia22'].textContent = dia2;
    var mes2 = document.all['mes2'].value;
    document.all['mes22'].textContent = mes2;
    var ano2 = document.all['ano2'].value;
    document.all['ano22'].textContent = ano2;

    var data2 = dia2 + "/" + mes2 + "/" + ano2;


    var saida = document.all['saida'];


    if (dia1 > 31 || dia1 < 0 || dia2 > 31 || dia2 < 0 || mes1 > 12 || mes1 < 0 || mes2 > 12 || mes2 < 0) {
        saida.innerHTML = alert("Reveja suas datas, há algo de errado");
        location.href = "ex4.html";
    } else if (ano1 > ano2) {
        saida.innerHTML = data2;
    } else if (ano2 > ano1) {
        saida.innerHTML = data1;
    } else if (ano1 == ano2) {
        if (mes1 > mes2) {
            saida.innerHTML = data2;
        } else if (mes2 > mes1) {
            saida.innerHTML = data1;
        } else if (mes1 == mes2) {
            if (dia1 > dia2) {
                saida.innerHTML = data2;
            } else if (dia2 > dia1) {
                saida.innerHTML = data1
            } else {
                saida.innerHTML = "As datas são iguais";
            }
        }
    }

}