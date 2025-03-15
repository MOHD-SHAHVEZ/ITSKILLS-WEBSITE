// Add 3D effect to course cards on hover

const courseCards = document.querySelectorAll('.course-card');

courseCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px) perspective(1000px) rotateY(5deg)';
        card.style.boxShadow = '0 10px 20px rgba(255, 255, 255, 0)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0) perspective(1000px) rotateY(0deg)';
        card.style.boxShadow = '0 4px 8px r(255, 255, 255, 0)';
    });
});