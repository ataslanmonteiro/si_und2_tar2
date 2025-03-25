function cifraCesar(texto, deslocamento) {
    let resultado = "";
  
    for (let i = 0; i < texto.length; i++) {
      let charCode = texto.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        resultado += String.fromCharCode(((charCode - 65 + deslocamento) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        resultado += String.fromCharCode(((charCode - 97 + deslocamento) % 26) + 97);
      } else {
        resultado += texto.charAt(i);
      }
    }
  
    return resultado;
  }
  
  function decifraCesar(texto, deslocamento) {
    return cifraCesar(texto, -deslocamento);
  }

console.log(cifraCesar("Olá, mundo!", 3));
console.log(decifraCesar("Krq, xvwulq!", 3));