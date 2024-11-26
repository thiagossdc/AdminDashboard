        // Lógica para ocultar/mostrar a seção de Projetos
        const toggleProjectsButton = document.getElementById('toggleProjects');
        const projectsSection = document.getElementById('projectsSection');

        toggleProjectsButton.addEventListener('click', () => {
            projectsSection.classList.toggle('hidden');
            toggleProjectsButton.textContent = projectsSection.classList.contains('hidden') ? 'Mostrar Projetos' : 'Ocultar Projetos';
        });

        // Lógica para pesquisa
        const searchInput = document.getElementById('searchInput');

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            if (query) {
                alert(`Você está buscando por: ${query}`);
            }
        });