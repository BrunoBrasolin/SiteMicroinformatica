
function exibir()
{
    for (var i = 1; i <= 25; i++) {
        var salarioinput = prompt("Digite um salário");
        var salario = Number(salarioinput);
        var saida = document.all['saida'];
        var bonificacao;
        var escola;

        if (salario <= 500){
            bonificacao = salario * 0.05;
        } else if (salario <= 1200){
            bonificacao = salario * 0.12;
        } else if (salario > 1200){
            bonificacao = 0;
        }

        if (salario <= 600){
            escola = 150;
        } else if (salario > 600){
            escola = 100;
        }
        salario += escola + bonificacao 
        saida.innerHTML +="Novo salário do funcionário " + i + " é de R$ " + salario.toFixed(2) + "<br>";            }

    }