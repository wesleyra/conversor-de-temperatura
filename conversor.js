

function tempconvert() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    if (isNaN(fahrenheit) || isNaN(celsius)) {
        alert("digite um valor válido!");
        return
    } else if (fahrenheit === '') {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    } else if (celsius === '') {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    } else {
        alert("obrigátorio um campo vazio!");
        zerar()
        return
    }

    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);


}
function zerar(){
    
    document.getElementById("fahrenheit").value = '';
    document.getElementById("celsius").value = '';


}