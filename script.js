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

            document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('image-container');
    const image = container.querySelector('img');

    container.addEventListener('mousemove', function(e) {
        let rect = container.getBoundingClientRect();

      
            // Play the music
            // We use a Promise to handle potential browser errors
            var promise = music.play();
            if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    // Autoplay was prevented.
                    console.log("Music autoplay was blocked by the browser.");
                    
        // Calculate mouse position relative to the container
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        // Calculate the maximum possible movement
        let maxX = image.width - container.offsetWidth;
        let maxY = image.height - container.offsetHeight;

        // Calculate the percentage of movement
        let moveX = (maxX * x / container.offsetWidth) * -1;
        let moveY = (maxY * y / container.offsetHeight) * -1;

        // Apply the transformation
        image.style.transform = 'translate3d(' + moveX + 'px, ' + moveY + 'px, 0)';
                });
            }
        }, 500); // 500ms matches the CSS transition time
    });
});
