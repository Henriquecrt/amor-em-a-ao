// Função para a galeria de projetos
function handleProjectGallery() {
    const projectLinks = document.querySelectorAll(".project-link"); // Seleciona todos os botões

    projectLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const projectId = link.dataset.projectId; // Obtém o ID do projeto

            // Encontre o elemento project-extra-images
            const targetImages = document.querySelector(`#extra-images-${projectId}`); // Seleciona a div correta

            // Mostra ou esconde as fotos extras
            targetImages.classList.toggle("hidden");

            // Altera o texto do link para "Ver Menos" ou "Ver Mais"
            if (targetImages.classList.contains("hidden")) {
                link.textContent = "Ver Mais";
            } else {
                link.textContent = "Ver Menos";
            }

            event.stopPropagation(); // Impede a propagação do evento
        });
    });
}

// Chame a função quando a página carregar
window.addEventListener("load", () => {
    handleProjectGallery();
});

// Função para rolagem suave
function smoothScroll(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}
// Função para controlar o menu responsivo
function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("show");
}

// Adiciona um evento de clique ao botão do menu
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", toggleMenu);