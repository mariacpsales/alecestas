// ============================================
// SCRIPT DO CARROSSEL DE BANNERS
// ============================================

let currentSlideIndex = 0;
let slideInterval;

// Função para mostrar slide específico
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Verificar se elementos existem
    if (!slides.length || !indicators.length) return;
    
    // Limpar interval existente
    clearInterval(slideInterval);
    
    // Ajustar index se necessário
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Remover classe active de todos os slides e indicadores
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Adicionar classe active ao slide e indicador atual
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
    
    // Reiniciar autoplay
    startAutoplay();
}

// Função para mover slide (prev/next)
function moveSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

// Função para autoplay
function startAutoplay() {
    slideInterval = setInterval(() => {
        showSlide(currentSlideIndex + 1);
    }, 5000); // Troca a cada 5 segundos
}

// Inicializar carrossel quando página carregar
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.banner-carousel');
    
    if (carousel) {
        // Pausar autoplay ao passar o mouse
        carousel.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        // Retomar autoplay ao sair o mouse
        carousel.addEventListener('mouseleave', () => {
            startAutoplay();
        });

        // Iniciar o carrossel
        startAutoplay();
    }
});

// Suporte para navegação por teclado
document.addEventListener('keydown', function(e) {
    const carousel = document.querySelector('.banner-carousel');
    if (!carousel) return;
    
    // Seta esquerda
    if (e.key === 'ArrowLeft') {
        moveSlide(-1);
    }
    // Seta direita
    else if (e.key === 'ArrowRight') {
        moveSlide(1);
    }
});
