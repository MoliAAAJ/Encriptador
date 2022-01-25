function copy() {
    
  var copyText = document.getElementById("output")
  copyText.select();    
  
  document.execCommand("Copy");
  document.getElementById("output").value=" ";

}

function encriptar() {

  const texto = document.getElementById("input-texto").value;
  const encriptado = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
  
  document.getElementById("output").value = encriptado;
  document.getElementById("input-texto").value=" ";

}

function desencriptar() {
  const enigma = document.getElementById("input-texto").value;
  const palabra = enigma.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
 
  document.getElementById("output").value = palabra;
  document.getElementById("input-texto").value=" ";

}