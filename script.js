function obtenerNumerosPrimos() {
    var numeroInput = document.getElementById("numeroInput");
    var resultadoElement = document.getElementById("resultado");
    
    var numero = parseInt(numeroInput.value);
    var primos = [];
  
    for (var i = 2; i <= numero; i++) {
      if (esPrimo(i)) {
        primos.push(i);
      }
    }
  
    resultadoElement.textContent = primos;
  }
  
  function esPrimo(numero) {
    for (var i = 2, raiz = Math.sqrt(numero); i <= raiz; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero > 1;
  }
  