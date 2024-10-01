// Função para o menu dropdown
function handleMenuDropdown() {
    const menuDropdown = document.querySelector("nav ul.dropdown");
    const menuToggle = document.querySelector(".menu-toggle");
  
    menuToggle.addEventListener("click", () => {
      menuDropdown.classList.toggle("show");
    });
  
    // Adicione este código para os links
    const menuLinks = document.querySelectorAll("#menu-dropdown a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuDropdown.classList.remove("show");
        // Adiciona rolagem suave para os links do menu
        const targetId = link.getAttribute("href");
        smoothScroll(targetId);
      });
    });
  }
  
  // Função para a galeria de projetos
  function handleProjectGallery() {
    const projectGallery = document.querySelector(".project-gallery");
    const projectLinks = document.querySelectorAll(".project-link");
  
    projectLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const projectId = link.dataset.projectId;
  
        // Encontre todos os elementos project-extra-images e filtre pelo data-project-id
        const projectExtraImages = document.querySelectorAll(
          `.project-extra-images`
        );
        const targetImages = Array.from(projectExtraImages).filter((image) => {
          return (
            image.closest(".project").dataset.projectId === projectId
          );
        });
  
        // Mostra ou esconde as fotos extras
        targetImages.forEach((image) => {
          image.classList.toggle("hidden");
        });
  
        // Altera o texto do link para "Ver Menos" ou "Ver Mais"
        if (targetImages[0].classList.contains("hidden")) {
          link.textContent = "Ver Mais";
        } else {
          link.textContent = "Ver Menos";
        }
  
        event.stopPropagation(); // Impede a propagação do evento
      });
    });
  }
  
  // Chame as funções quando a página carregar
  window.addEventListener("load", () => {
    handleMenuDropdown();
    handleProjectGallery();
  });
  
  // Adiciona a classe "show" às seções ao rolar
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    });
  });
  
  // Função para rolagem suave
  function smoothScroll(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }