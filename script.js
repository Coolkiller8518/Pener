document.addEventListener('DOMContentLoaded', function() {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const music = document.getElementById('background-music');
    const backgroundImage = document.getElementById('background-image');
    
    // --- Splash Screen and Music ---
    splash.addEventListener('click', function() {
        // Fade out the splash screen
        splash.style.opacity = '0';
        
        // After the fade out, hide it and show the main content
        setTimeout(() => {
            splash.style.display = 'none';
            mainContent.style.display = 'flex'; 
            
            // Try to play the music (browsers may block this)
            music.play().catch(error => {
                console.log("Music autoplay was blocked by the browser.");
            });
        }, 500); // This time matches the CSS transition time
    });

    // --- Image Pan Effect ---
    window.addEventListener('mousemove', function(e) {
        // Calculate mouse position as a value between -0.5 and 0.5
        const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
        const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

        // The '30' here is the pan intensity. You can make it bigger for more movement.
        const moveX = -x * 30; 
        const moveY = -y * 30; 

        // Apply the pan effect to the image using CSS Transform
        // We use requestAnimationFrame for smoother animation
        window.requestAnimationFrame(() => {
            backgroundImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
});
