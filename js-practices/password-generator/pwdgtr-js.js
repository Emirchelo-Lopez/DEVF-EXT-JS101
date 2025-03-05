// Función para generar una contraseña segura
function generarContraseña() {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let contraseña = "";

  // La contraseña tendrá al menos 8 caracteres
  for (let i = 0; i < 12; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[indiceAleatorio];
  }

  // Mostrar la contraseña en el campo de texto
  document.getElementById("passwordOutput").value = contraseña;
}

// Asignar la función al botón cuando se haga clic
document
  .getElementById("generateButton")
  .addEventListener("click", generarContraseña);
