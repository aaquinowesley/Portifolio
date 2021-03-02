document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

const $html = document.querySelector("html")
const $buttondarkmode = document.querySelector(".menu button")

$buttondarkmode.addEventListener("click", function(){
    $html.classList.toggle("dark-mode")
} );
