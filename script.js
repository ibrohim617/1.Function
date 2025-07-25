function toggleMode(mode) {
    const body = document.body;
    const modeButtons = document.querySelectorAll('.mode-btn');
    const lightModeBtn = modeButtons[0]; // First button is LightMode
    const darkModeBtn = modeButtons[1]; // Second button is Day and Night
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const modeButtonsContainer = document.querySelector('.mode-buttons');

    // Apply navbar styling
    navbar.style.display = 'flex';
    navbar.style.justifyContent = 'space-between';
    navbar.style.alignItems = 'center';
    navbar.style.padding = '10px';

    // Apply nav-links styling
    navLinks.style.display = 'flex';
    const links = navLinks.querySelectorAll('a');
    links.forEach((link, index) => {
        link.style.marginLeft = index > 0 ? '10px' : '0';
        link.style.textDecoration = 'none';
        link.style.color = mode === 'dark' ? '#ffffff' : '#000000';
    });

    // Apply mode-buttons styling
    modeButtonsContainer.style.display = 'flex';
    modeButtonsContainer.style.gap = '10px';

    // Apply content styling
    const content = document.querySelector('.content');
    content.style.padding = '20px';
    content.style.minHeight = '80vh';

    if (mode === 'dark') {
        // Night mode: black background, white button text
        body.style.backgroundColor = '#000000';
        body.style.color = '#ffffff';
        body.style.transition = 'all 0.3s ease';

        lightModeBtn.style.backgroundColor = '#ffffff';
        lightModeBtn.style.color = '#000000';
        lightModeBtn.style.padding = '8px 16px';
        lightModeBtn.style.borderRadius = '8px';
        lightModeBtn.style.cursor = 'pointer';
        lightModeBtn.style.fontSize = '14px';
        lightModeBtn.style.border = 'none';

        darkModeBtn.style.backgroundColor = '#ffffff';
        darkModeBtn.style.color = '#000000';
        darkModeBtn.style.padding = '8px 16px';
        darkModeBtn.style.borderRadius = '8px';
        darkModeBtn.style.cursor = 'pointer';
        darkModeBtn.style.fontSize = '14px';
        darkModeBtn.style.border = 'none';

        alert('Tungi rejim yoqilgan');
    } else {
        // Day mode: white background, black button text
        body.style.backgroundColor = '#ffffff';
        body.style.color = '#000000';
        body.style.transition = 'all 0.3s ease';

        lightModeBtn.style.backgroundColor = '#000000';
        lightModeBtn.style.color = '#ffffff';
        lightModeBtn.style.padding = '8px 16px';
        lightModeBtn.style.borderRadius = '8px';
        lightModeBtn.style.cursor = 'pointer';
        lightModeBtn.style.fontSize = '14px';
        lightModeBtn.style.border = 'none';

        darkModeBtn.style.backgroundColor = '#000000';
        darkModeBtn.style.color = '#ffffff';
        darkModeBtn.style.padding = '8px 16px';
        darkModeBtn.style.borderRadius = '8px';
        darkModeBtn.style.cursor = 'pointer';
        darkModeBtn.style.fontSize = '14px';
        darkModeBtn.style.border = 'none';

        alert('Kunduzgi rejim yoqilgan');
    }
}