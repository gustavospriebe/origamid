const nav = document.querySelector("#nav");

const button = document.querySelector("#btn-mobile");

function handleMenu(event: Event) {
    nav?.classList.toggle("active");
    if (nav?.classList.contains("active")) {
        button!.ariaExpanded = "fal se";
        button!.ariaLabel = "Abrir Menu";
    } else {
        button!.ariaExpanded = "true";
        button!.ariaLabel = "Fechar Menu";
    }
}

button?.addEventListener("pointerdown", handleMenu);

console.log(button?.ariaExpanded);
