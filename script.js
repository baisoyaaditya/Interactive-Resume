// ===== Theme Toggle with LocalStorage =====
const toggleBtn = document.getElementById('theme-toggle');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀';
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? '☀' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ===== Project Modal =====
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPoints = document.getElementById('modal-points');
const closeModal = document.getElementById('close-modal');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalTitle.textContent = card.dataset.title;
        modalDescription.textContent = card.dataset.description;

        // Bullet points
        modalPoints.innerHTML = '';
        const points = JSON.parse(card.dataset.points);
        points.forEach(pt => {
            const li = document.createElement('li');
            li.textContent = pt;
            modalPoints.appendChild(li);
        });
    });
});

closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

// ===== Scroll Animations =====
const observers = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.2 });
observers.forEach(el => observer.observe(el));

// ===== Contact Form (Demo Only) =====
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert("📩 Thanks! Your message has been received.");
    e.target.reset();
});