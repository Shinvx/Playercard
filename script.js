let currentCard = null; 


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
        buttonLink: 'https://tellonym.me/shinv'
    },
    Instagram: {
        imageUrl: 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-512.png',
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

    const profileCard = document.getElementById('mainProfileCard');
    profileCard.style.display = 'block';

 
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.volume = 0.3; 
    backgroundMusic.play();

  
    setTimeout(() => {
        profileCard.classList.add('show'); 
    }, 10); 
});


document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const platform = this.getAttribute('data-platform');

        const newCard = document.createElement('div');
        newCard.className = 'new-profile-card';
        const data = playerCardData[platform];

        newCard.innerHTML = `
            <img src="${data.imageUrl}" alt="${platform} Player Photo" class="profile-photo">
            <h1 class="profile-name">${platform}</h1>
            <p class="profile-description">${data.description}</p>
            <a href="${data.buttonLink}" target="_blank" class="social-link" style="background-color: ${window.getComputedStyle(this).backgroundColor};">${data.buttonText}</a>
        `;

        if (currentCard) {
            currentCard.classList.remove('show'); 
            setTimeout(() => {
                currentCard.remove(); 
                openNewCard(newCard); 
            }, 500); 
        } else {
            openNewCard(newCard);
        }
    });
});

function openNewCard(newCard) {
    
    document.getElementById('playerCardsContainer').appendChild(newCard);


    setTimeout(() => {
        newCard.classList.add('show'); 
        currentCard = newCard; 
    }, 10); 
}
