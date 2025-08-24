function toggleMode(mode) {
    const body = document.body;
    const lightModeBtn = document.getElementById('lightModeBtn');
    const darkModeBtn = document.getElementById('darkModeBtn');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const lightMode = document.getElementById('lightMode');
    const darkMode = document.getElementById('darkMode');

    if (mode === 'dark') {
        body.classList.add('bg-black', 'text-white');
        body.classList.remove('bg-[#C4B5A5]', 'text-black');
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-[#C4B5A5]');
        navLinks.querySelectorAll('a').forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-black');
        });
        lightMode.classList.add('hidden');
        darkMode.classList.remove('hidden');
        lightModeBtn.classList.add('bg-[#C4B5A5]', 'text-white');
        lightModeBtn.classList.remove('bg-[#FB982F]', 'text-black');
        darkModeBtn.classList.add('bg-[#FFC107]', 'text-white', 'border-none');
        darkModeBtn.classList.remove('bg-black', 'border', 'border-black');
        alert('Tungi rejim yoqilgan');
    } else {
        body.classList.add('bg-[#C4B5A5]', 'text-black');
        body.classList.remove('bg-black', 'text-white');
        navbar.classList.add('bg-[#C4B5A5]');
        navbar.classList.remove('bg-black');
        navLinks.querySelectorAll('a').forEach(link => {
            link.classList.add('text-black');
            link.classList.remove('text-white');
        });
        lightMode.classList.remove('hidden');
        darkMode.classList.add('hidden');
        lightModeBtn.classList.add('bg-[#FB982F]', 'text-black');
        lightModeBtn.classList.remove('bg-[#C4B5A5]', 'text-white');
        darkModeBtn.classList.add('bg-black', 'border', 'border-black', 'text-white');
        darkModeBtn.classList.remove('bg-[#FFC107]', 'border-none');
        alert('Kunduzgi rejim yoqilgan');
    }
}


toggleMode('light');