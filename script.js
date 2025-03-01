let currentCard = null; 


const playerCardData = {
    Steam: {
        imageUrl: 'images/steam.png', // Local image for Steam
        description: 'Welcome to my Steam profile! Feel free to add me, but no VAC bans.',
        buttonText: 'Steam',
        buttonLink: 'https://steamcommunity.com/id/Sh1nv/'
    },
    RiotGames: {
        imageUrl: 'images/riot-games-logo.png', // Local image for Riot Games
        description: 'Welcome to my Riot Games profile!',
        buttonText: 'Riot Games',
        buttonLink: 'https://shinvx.github.io/riotPage/'
    },
    Tellonym: {
        imageUrl: 'images/tello.png', // Local image for Tellonym
        description: '',
        buttonText: 'Tellonym',
        buttonLink: 'https://tellonym.me/shinv'
    },
    Instagram: {
        imageUrl: 'images/insta.png', // Local image for Instagram
        description: '',
        buttonText: 'Instagram',
        buttonLink: 'https://www.instagram.com/shn.dnie/'
    }
};


function typeEffect(text, delay) {
    let index = 0;

   
    const type = () => {
        if (index < text.length) {
            document.title = text.slice(0, index + 1); 
            index++;
            setTimeout(type, delay); 
        } else {
           
            setTimeout(remove, 3000);
        }
    };

  
    const remove = () => {
        if (index > 1) {
            document.title = text.slice(0, index - 1); 
            index--;
            setTimeout(remove, delay); 
        } else {
           
            setTimeout(() => typeEffect(text, delay), 1000); 
        }
    };

    type(); 
}


typeEffect("@SHIN", 300); 


document.getElementById('startView').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none'; 
    this.style.display = 'none'; 

    const profileContainer = document.getElementById('profileContainer');
    profileContainer.style.display = 'block';

    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.volume = 0.3; 
    backgroundMusic.play();

    setTimeout(() => {
        profileContainer.classList.add('show'); 
    }, 10); 
});

document.querySelectorAll('.social-button').forEach(button => {
    button.addEventListener('click', function(event) {
        // No need to prevent default since we want to follow the link
        const platform = this.getAttribute('data-platform');
        const data = playerCardData[platform];

        // Check if data is defined
        if (!data) {
            console.error(`No data found for platform: ${platform}`);
            return; // Exit the function if data is not found
        }

        // Open the link directly
        window.open(data.buttonLink, '_blank'); // Open the link in a new tab
    });
});

function openNewCard(newCard) {
    document.getElementById('playerCardsContainer').appendChild(newCard);
    setTimeout(() => {
        newCard.classList.add('show'); 
        currentCard = newCard; 
    }, 10); 
}