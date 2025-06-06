/* Import a font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh; /* Use vh for full viewport height */
    overflow: hidden; /* This is important to hide parts of the image that go off-screen */
    font-family: 'Poppins', sans-serif;
    background-color: #000;
}

#background-image-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; /* Hides the parts of the image that are outside the container */
    z-index: -1;
}

#background-image {
    position: absolute;
    /* Start the image larger than the screen to create the "zoomed-in" look */
    width: 120%;
    height: 120%;
    object-fit: cover; /* Ensures the image covers the area without distortion */
    /* Start the image centered */
    top: -10%;
    left: -10%;
    /* Add a smooth transition for the panning effect */
    transition: transform 0.2s ease-out; 
}

/* Splash screen styles */
#splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    z-index: 10;
    cursor: pointer;
    transition: opacity 0.5s ease-out;
}

.splash-content h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6;
}

/* Main content that appears after splash screen */
#main-content {
    display: none; /* Hidden by default */
    flex-direction: column; /* Center content vertically */
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    color: white;
    text-align: center;
    position: relative;
    z-index: 1;
    /* Add a slight backdrop for readability */
    background-color: rgba(0, 0, 0, 0.2); 
}

.profile-container {
    padding: 20px;
}

/* The glow effect for the text */
.glow {
    font-size: 4.5rem;
    font-weight: 700;
    color: #fff;
    text-shadow: 
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #0a58ca,
        0 0 82px #0a58ca;
}

.profile-container p {
    font-size: 1.2rem;
    margin-top: -10px;
    color: #ccc;
}

.social-links {
    margin-top: 25px;
}

.social-links a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
    margin: 0 15px;
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

.social-links a:hover {
    color: #00aaff;
    text-shadow: 0 0 10px #00aaff;
}
