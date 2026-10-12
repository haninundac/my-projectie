// Interactive Cheer / Lightstick Button Counter & Sparkle Generator
const cheerBtn = document.getElementById('cheerBtn');
const cheerCount = document.getElementById('cheerCount');
const sparklesContainer = document.getElementById('sparkles');

let count = 0;
const sparkleSymbols = ['✨', '💖', '⭐', '💫', '🌟'];

cheerBtn.addEventListener('click', (e) => {
    count++;
    cheerCount.textContent = count;

    // Get click position for sparkle burst
    const rect = cheerBtn.getBoundingClientRect();
    const x = e.clientX || (rect.left + rect.width / 2);
    const y = e.clientY || (rect.top + rect.height / 2);

    // Create multiple sparkles on click
    for (let i = 0; i < 5; i++) {
        createSparkle(x, y);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
    
    // Random offset spread
    const offsetX = (Math.random() - 0.5) * 80;
    const offsetY = (Math.random() - 0.5) * 40;
    
    sparkle.style.left = `${x + offsetX}px`;
    sparkle.style.top = `${y + offsetY}px`;
    
    sparklesContainer.appendChild(sparkle);

    // Remove element after animation finishes
    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}