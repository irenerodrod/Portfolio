let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel-wrapper');
    const items = carousel.children;
    const itemWidth = items[0].offsetWidth;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}