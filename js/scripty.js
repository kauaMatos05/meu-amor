const fotosDiv = document.querySelector('.fotos');

// cria a imagem inicial
const img = document.createElement('img');
img.src = 'fotos/1 (1).jpeg';
img.style.opacity = 1; // começa visível
img.style.transition = 'opacity 1s ease-in-out'; // fade suave
fotosDiv.appendChild(img);

const fotos = [
  'fotos/1 (1).jpeg',
  'fotos/1 (2).jpeg',
  'fotos/1 (3).jpeg',
  'fotos/1 (4).jpeg',
  'fotos/1 (5).jpeg',
  'fotos/1 (6).jpeg',
  'fotos/1 (7).jpeg',
  'fotos/1 (8).jpeg',
  'fotos/1 (9).jpeg',
  'fotos/1 (10).jpeg',
  'fotos/1 (11).jpeg',
  'fotos/1 (12).jpeg',
  'fotos/1 (13).jpeg',
  'fotos/1 (14).jpeg',
  'fotos/1 (15).jpeg'
];

let index = 1;

// Função para trocar a imagem com fade
function mudarImagem() {
    img.style.opacity = 0; // fade out

    setTimeout(() => {
        img.src = fotos[index]; // troca a imagem
        img.style.opacity = 1;  // fade in

        index++;
        if (index >= fotos.length) index = 0;
    }, 1000); // 1000ms = duração do fade
}

// troca a cada 3 segundos
setInterval(mudarImagem, 3000);
