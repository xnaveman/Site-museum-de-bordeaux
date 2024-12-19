const button = document.getElementById('toggle-dark-mode');
const participateSection = document.querySelector('.participer-soutenir');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (participateSection) {
        participateSection.classList.toggle('dark-mode');
    }
    if (header) {
        header.classList.toggle('dark-mode');
    }
    if (footer) {
        footer.classList.toggle('dark-mode');
    }
});