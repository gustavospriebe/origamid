"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    mostrarCursos(data);
    console.log(data);
}
fetchCursos();
function mostrarCursos(data) {
    data.map((item) => {
        document.body.innerHTML += `
    <div>
      <h2 style="color: ${item.nivel === "iniciante" ? "blue" : "red"}">${item.nome}</h2>
      <p>Horas: ${item.horas}</p>
      <p>Aulas: ${item.aulas}</p>
      <p>Tipo: ${item.gratuito ? "Gratuito" : "Pago"}</p>
      <p>Tags: ${item.tags.join(", ")}</p>
      <p>Aulas: ${item.idAulas.join(" | ")}</p>
    </div>
  `;
    });
}
