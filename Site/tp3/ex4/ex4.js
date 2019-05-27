function ordenar(){
    var a = [];
    for( i = 1; i < 21; i++){
        var t = prompt("Digite um número");
        a.push(t);
    }

    function sortfunction(a, b){
        return (a - b)
    }
  
    document.getElementById("saida").innerHTML = "Os números ordenados: " +  a.sort(sortfunction); 

}