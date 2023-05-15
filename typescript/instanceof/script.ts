const link = document.querySelector("#origamid");

if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace("http://", "https://");
}

console.log(link);
