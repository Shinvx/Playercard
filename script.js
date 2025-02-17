let currentCard = null; // Variable to keep track of the currently displayed card

// Define player card data for each social link
const playerCardData = {
    Steam: {
        imageUrl: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_steam-512.png',
	@@ -28,95 +28,93 @@ const playerCardData = {
    }
};

// Function to create typing effect for the title in the tab
function typeEffect(text, delay) {
    let index = 0;

    // Function to type the text
    const type = () => {
        if (index < text.length) {
            document.title = text.slice(0, index + 1); // Update the title with the current substring
            index++;
            setTimeout(type, delay); // Call the type function again after the delay
        } else {
            // Wait for 3 seconds before starting to remove characters
            setTimeout(remove, 3000);
        }
    };

    // Function to remove the text
    const remove = () => {
        if (index > 1) { // Stop removing at the '@' character
            document.title = text.slice(0, index - 1); // Update the title with the current substring
            index--;
            setTimeout(remove, delay); // Call the remove function again after the delay
        } else {
            // Restart the typing effect
            setTimeout(() => typeEffect(text, delay), 1000); // Wait 1 second before restarting
        }
    };

    type(); // Start the typing effect
}

// Call the typeEffect function with the desired text and delay
typeEffect("@SHIN", 300); // Start with '@SHIN' and adjust the delay as needed

// Handle click on the starting view
// Handle click on the starting view
// Handle click on the starting view
document.getElementById('startView').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none'; // Hide the overlay
    this.style.display = 'none'; // Hide the "Click to enter..." text

    const profileCard = document.getElementById('mainProfileCard');
    profileCard.style.display = 'block'; // Show the profile card

    // Play background music
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.volume = 0.3; // Set volume to 30%
    backgroundMusic.play(); // Start playing the music

    // Trigger the slide-in animation
    setTimeout(() => {
        profileCard.classList.add('show'); // Add the class to trigger the animation
    }, 10); // Small timeout to ensure the display is set before adding the class
});

// Add event listeners for social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const platform = this.getAttribute('data-platform');

        const newCard = document.createElement('div');
        newCard.className = 'new-profile-card';
        const data = playerCardData[platform];

        // Add content to the new player card
        newCard.innerHTML = `
            <img src="${data.imageUrl}" alt="${platform} Player Photo" class="profile-photo">
            <h1 class="profile-name">${platform}</h1>
            <p class="profile-description">${data.description}</p>
            <a href="${data.buttonLink}" target="_blank" class="social-link" style="background-color: ${window.getComputedStyle(this).backgroundColor};">${data.buttonText}</a>
        `;

        // If a card is already displayed, close it smoothly
        if (currentCard) {
            currentCard.classList.remove('show'); 
            setTimeout(() => {
                currentCard.remove(); 
                openNewCard(newCard); 
            }, 500); 
        } else {
            // If no card is currently displayed, just open the new card
            openNewCard(newCard);
        }
    });
});

// Function to open a new card
function openNewCard(newCard) {

    document.getElementById('playerCardsContainer').appendChild(newCard);
	@@ -126,4 +124,4 @@ function openNewCard(newCard) {
        newCard.classList.add('show'); 
        currentCard = newCard; 
    }, 10); 
}
