document.addEventListener('DOMContentLoaded', function() {
    console.log('Web project loaded successfully!');
    
    const header = document.querySelector('header h1');
    if (header) {
        header.addEventListener('click', function() {
            this.style.color = this.style.color === 'rgb(52, 152, 219)' ? '' : '#3498db';
        });
    }
    
    function getCurrentYear() {
        return new Date().getFullYear();
    }
    
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = `© ${getCurrentYear()} My Web Project`;
    }
});