document.addEventListener('DOMContentLoaded', function() {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const music = document.getElementById('background-music');

    splash.addEventListener('click', function() {
        // Fade out the splash screen
        splash.style.opacity = '0';
        
        // Wait for the fade out to finish
        setTimeout(() => {
            splash.style.display = 'none';
            
            // Show the main content
            mainContent.style.display = 'flex';
            
            // Play the music
            // We use a Promise to handle potential browser errors
            var promise = music.play();
            if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    // Autoplay was prevented.
                    console.log("Music autoplay was blocked by the browser.");
                });
            }
        }, 500); // 500ms matches the CSS transition time
    });
});
