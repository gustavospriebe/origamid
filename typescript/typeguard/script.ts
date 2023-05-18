// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

const fetchData = async () => {
    const req = await fetch(`https://api.origamid.dev/json/cursos.json`);
    const res = await req.json();

    handleCursos(res);
};

fetchData();

interface dataAPI {
    nome: string;
    horas: number;
    aulas: number;
    gratuito: boolean;
    tags: string[];
    idAulas: number[];
    nivel: "iniciante" | "avancado";
}

function isCurso(data: unknown): data is dataAPI {
    if (
        data &&
        typeof data === "object" &&
        "nome" in data &&
        "horas" in data &&
        "tags" in data
    ) {
        return true;
    } else {
        return false;
    }
}

function handleCursos(data: unknown) {
    if (data instanceof Array) {
        data.filter(isCurso).map((item) => {
            document.body.innerHTML += `
          <div>
            <h2>${item.nome}</h2>
            <p>${item.horas}</p>
            <p>${item.tags.join(", ")}</p>
          </div>
        `;
        });
    }
}
