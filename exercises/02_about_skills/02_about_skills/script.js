const skills = document.querySelectorAll('.skill-progress');

window.addEventListener('scroll', () => {
    skills.forEach(skill => {
        const position = skill.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            skill.style.width = skill.getAttribute('data-width');
        }
    });
});