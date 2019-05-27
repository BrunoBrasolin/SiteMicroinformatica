function ordenar() {
    var num1 = Number(document.all['num1'].value);
    var num2 = Number(document.all['num2'].value);
    var num3 = Number(document.all['num3'].value);
    var saida = document.all['saida'];

    if (num1 == num2 || num2 == num3 || num3 == num1) {
        alert("Reveja os números, há algo de errado")
        location.href = 'ex3.html';
    } else {
        if (num1 > num2 && num2 > num3) { saida.innerHTML = num3 + ", " + num2 + ", " + num1; }
        else if (num1 > num3 && num3 > num2) { saida.innerHTML = num2 + ", " + num3 + ", " + num1; }
        else if (num2 > num1 && num1 > num3) { saida.innerHTML = num3 + ", " + num1 + ", " + num2; }
        else if (num2 > num3 && num3 > num1) { saida.innerHTML = num1 + ", " + num3 + ", " + num2; }
        else if (num3 > num1 && num1 > num2) { saida.innerHTML = num2 + ", " + num1 + ", " + num3; }
        else if (num3 > num2 && num2 > num1) { saida.innerHTML = num1 + ", " + num2 + ", " + num3; }
    }
}