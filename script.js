let currentCard = null; // Variable to keep track of the currently displayed card

// Define player card data for each social link
const playerCardData = {
    Steam: {
        imageUrl: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_steam-512.png',
        description: 'Welcome to my Steam profile! Feel free to add me, but no VAC bans.',
        buttonText: 'Steam',
        buttonLink: 'https://steamcommunity.com/id/Sh1nv/'
    },
    Snapchat: {
        imageUrl: 'https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_7-snapchat-512.png',
        description: '',
        buttonText: 'Snapchat',
        buttonLink: 'https://www.snapchat.com/add/dnie.wu?share_id=SnJV5OzPnU8&locale=de-DE'
    },
    Tellonym: {
        imageUrl: 'http://cdn-1.webcatalog.io/catalog/tellonym/tellonym-icon-filled-256.png?v=1736131175564',
        description: '',
        buttonText: 'Tellonym',
        buttonLink: 'https://tellonym.me/yourusername'
    },
    Instagram: {
        imageUrl: 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-512.png',
        description: '',
        buttonText: 'Instagram',
        buttonLink: 'https://www.instagram.com/shn.dnie/'
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


    setTimeout(() => {
        newCard.classList.add('show'); 
        currentCard = newCard; 
    }, 10); 
}