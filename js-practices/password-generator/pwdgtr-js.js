// Función para generar una contraseña segura basada en la configuración
function generarContraseña() {
  const longitud = document.getElementById("lengthSlider").value;
  const incluirMayusculas =
    document.getElementById("uppercaseCheckbox").checked;
  const incluirMinusculas =
    document.getElementById("lowercaseCheckbox").checked;
  const incluirNumeros = document.getElementById("numbersCheckbox").checked;
  const incluirSimbolos = document.getElementById("symbolsCheckbox").checked;

  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+";

  let caracteres = "";
  if (incluirMayusculas) caracteres += mayusculas;
  if (incluirMinusculas) caracteres += minusculas;
  if (incluirNumeros) caracteres += numeros;
  if (incluirSimbolos) caracteres += simbolos;

  if (caracteres === "") {
    alert("Selecciona al menos una opción.");
    return;
  }

  let contraseña = "";
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[indiceAleatorio];
  }

  document.getElementById("passwordOutput").value = contraseña;
  evaluarSeguridad(contraseña);
}

// Función para evaluar la seguridad de la contraseña
function evaluarSeguridad(contraseña) {
  let puntaje = 0;

  if (contraseña.length >= 12) puntaje++;
  if (/[A-Z]/.test(contraseña)) puntaje++;
  if (/[a-z]/.test(contraseña)) puntaje++;
  if (/[0-9]/.test(contraseña)) puntaje++;
  if (/[^A-Za-z0-9]/.test(contraseña)) puntaje++;

  const indicador = document.getElementById("strengthIndicator");
  const textoSeguridad = document.getElementById("strengthText");

  if (puntaje <= 2) {
    textoSeguridad.textContent = "Débil";
    indicador.style.width = "25%";
    indicador.style.background = "red";
  } else if (puntaje === 3) {
    textoSeguridad.textContent = "Media";
    indicador.style.width = "50%";
    indicador.style.background = "yellow";
  } else {
    textoSeguridad.textContent = "Fuerte";
    indicador.style.width = "100%";
    indicador.style.background = "green";
  }
}

// Actualizar el valor de la longitud en tiempo real
document.getElementById("lengthSlider").addEventListener("input", function () {
  document.getElementById("lengthValue").textContent = this.value;
});

// Copiar contraseña al portapapeles
document.getElementById("copyButton").addEventListener("click", function () {
  const passwordField = document.getElementById("passwordOutput");
  passwordField.select();
  document.execCommand("copy");
});

// Asignar evento al botón de generar
document
  .getElementById("generateButton")
  .addEventListener("click", generarContraseña);
