const header = document.getElementById('header');

if (!header) {
    console.error('Elemento #header não encontrado');
} else {
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error(`Erro ${response.status}`);
            return response.text();
        })
        .then(html => {
            header.innerHTML = html;
            
            // Verifica se estamos na pasta paginas
            const isInPaginas = window.location.pathname.includes('/paginas/');
            
            document.querySelectorAll('.menu h2').forEach(item => {
                item.addEventListener('click', () => {
                    const page = item.textContent.trim().toLowerCase();
                    
                    // Configuração de caminhos
                    const paths = {
                        fotos: isInPaginas ? '../index.html' : 'index.html',
                        historia: isInPaginas ? 'historia.html' : 'paginas/historia.html',
                    };
                    
                    if (paths[page]) {
                        window.location.href = paths[page];
                    } else {
                        console.error('Página não encontrada:', page);
                    }
                });
            });
        })
        .catch(error => {
            console.error('Erro ao carregar header:', error);
            
            // Fallback
            header.innerHTML = `
                <nav class="menu">
                    <h2>Fotos</h2>
                    <h2>Historia</h2>
                </nav>
            `;
            
            const isInPaginas = window.location.pathname.includes('/paginas/');
            
            document.querySelectorAll('.menu h2').forEach(item => {
                item.addEventListener('click', () => {
                    const page = item.textContent.trim().toLowerCase();
                    let path = '';
                    
                    if (page === 'fotos') path = isInPaginas ? '../index.html' : 'index.html';
                    if (page === 'historia') path = isInPaginas ? 'historia.html' : 'paginas/historia.html';
                    
                    if (path) window.location.href = path;
                });
            });
        });
}
