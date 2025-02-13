let currentCard = null; // Variable to keep track of the currently displayed card

// Define player card data for each social link
const playerCardData = {
    Steam: {
        imageUrl: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_steam-512.png', // Replace with your image URL
        description: 'Welcome to my Steam profile! Feel free to add me, but no VAC bans.',
        buttonText: 'Steam',
        buttonLink: 'https://steamcommunity.com/id/Sh1nv/'
    },
    Snapchat: {
        imageUrl: 'https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_7-snapchat-512.png', // Replace with your image URL
        description: '',
        buttonText: 'Snapchat',
        buttonLink: 'https://www.snapchat.com/add/dnie.wu?share_id=SnJV5OzPnU8&locale=de-DE' // Replace with your link
    },
    Tellonym: {
        imageUrl: 'http://cdn-1.webcatalog.io/catalog/tellonym/tellonym-icon-filled-256.png?v=1736131175564', // Replace with your image URL
        description: '',
        buttonText: 'Tellonym',
        buttonLink: 'https://tellonym.me/SHINv' // Replace with your link
    },
    Instagram: {
        imageUrl: 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-512.png', // Replace with your image URL
        description: '',
        buttonText: 'Instagram',
        buttonLink: 'https://www.instagram.com/shn.dnie/' // Replace with your link
    }
};

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Remove the current card if it exists
        if (currentCard) {
            currentCard.remove();
        }

        // Get the platform name from the data attribute
        const platform = this.getAttribute('data-platform');

        // Create a new player card using the predefined data
        const newCard = document.createElement('div');
        newCard.className = 'new-profile-card';

        // Get the data for the selected platform
        const data = playerCardData[platform];

        // Add content to the new player card
        newCard.innerHTML = `
            <img src="${data.imageUrl}" alt="${platform} Player Photo" class="profile-photo">
            <h1 class="profile-name">${platform}</h1>
            <p class="profile-description">${data.description}</p>
            <a href="${data.buttonLink}" target="_blank" class="social-link" style="background-color: ${window.getComputedStyle(this).backgroundColor};">${data.buttonText}</a>
        `;

        // Append the new player card to the container
        document.getElementById('playerCardsContainer').appendChild(newCard);

        // Update the currentCard variable to the new card
        currentCard = newCard;
    });
});
