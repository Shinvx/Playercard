let currentCard = null; 
const backgroundMusic = document.getElementById('backgroundMusic');
const muteButton = document.getElementById('muteButton');
const muteIcon = document.getElementById('muteIcon');
const profileCard = document.querySelector('.profile-card');
const profilePhoto = document.querySelector('.profile-photo');
const navbarToggle = document.getElementById('navbarToggle');
const navbar = document.getElementById('navbar');
const gamesPage = document.getElementById('gamesPage');
const backToProfileButton = document.getElementById('backToProfile');

// Event listener for the mute button
muteButton.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play(); 
        muteIcon.classList.remove('fa-volume-mute');
        muteIcon.classList.add('fa-volume-up'); 
    } else {
        backgroundMusic.pause(); 
        muteIcon.classList.remove('fa-volume-up'); 
        muteIcon.classList.add('fa-volume-mute');
    }
});

// Event listener for the start view
document.getElementById('startView').addEventListener('click', function() {
    const overlay = document.querySelector('.overlay');
    const profileContainer = document.getElementById('profileContainer');

    overlay.classList.add('hide'); 

    setTimeout(() => {
        overlay.style.display = 'none'; 
    }, 500); 

    this.style.display = 'none'; 

    profileContainer.style.display = 'block'; 
    setTimeout(() => {
        profileContainer.style.opacity = '1'; 
    }, 10); 

    backgroundMusic.volume = 0.3; 
    backgroundMusic.play();

    setTimeout(() => {
        profileContainer.classList.add('show'); 
    }, 10);
    
    navbar.style.display = 'flex'; // Show the navbar
});

// Toggle Navbar Visibility
navbarToggle.addEventListener('click', function() {
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'flex'; // Show the navbar
        setTimeout(() => {
            navbar.classList.add('show'); // Add the show class for animation
        }, 10); // Delay to allow the display to be set before adding the class
    } else {
        navbar.classList.remove('show'); // Remove the show class for animation
        setTimeout(() => {
            navbar.style.display = 'none'; // Hide the navbar after the animation
        }, 300); // Match this duration with the CSS transition duration
    }
});

// Event listener for the "Games" link
document.getElementById('gamesLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById('profileContainer').style.display = 'none'; // Hide the profile container
    navbar.style.display = 'none'; // Hide the navbar
    gamesPage.style.display = 'block'; // Show the games page
    navbarToggle.style.display = 'block'; // Ensure the toggle button is visible
});

// Event listener for the "Profile" link
document.getElementById('profileLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    gamesPage.style.display = 'none'; // Hide the games page
    document.getElementById('profileContainer').style.display = 'block'; // Show the profile container
    navbar.style.display = 'flex'; // Show the navbar again
    navbarToggle.style.display = 'block'; // Ensure the toggle button is visible
});

// Profile Card Animation
profileCard.addEventListener('mousemove', (e) => {
    const { offsetWidth, offsetHeight } = profileCard;
    const rect = profileCard.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  

    const centerX = offsetWidth / 2;
    const centerY = offsetHeight / 2;

    const deltaX = (x - centerX) / centerX; 
    const deltaY = (y - centerY) / centerY; 

    const tiltX = deltaY * 10; 
    const tiltY = -deltaX * 10; 

    profileCard.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`; 
    profilePhoto.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
});

profileCard.addEventListener('mouseleave', () => {
    profileCard.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'; 
    profilePhoto.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

// Player Card Data
const playerCardData = {
    Steam: {
        imageUrl: 'images/steam.png', 
        description: 'Welcome to my Steam profile! Feel free to add me, but no VAC bans.',
        buttonText: 'Steam',
        buttonLink: 'https://steamcommunity.com/id/Sh1nv/'
    },
    RiotGames: {
        imageUrl: 'images/riot-games-logo.png',
        description: 'Welcome to my Riot Games profile!',
        buttonText: 'Riot Games',
        buttonLink: 'https://shinvx.github.io/riotPage/'
    },
    Tellonym: {
        imageUrl: 'images/tello.png',
        description: '',
        buttonText: 'Tellonym',
        buttonLink: 'https://tellonym.me/shinv'
    },
    Instagram: {
        imageUrl: 'images/insta.png', 
        description: '',
        buttonText: 'Instagram',
        buttonLink: 'https://www.instagram.com/shn.dnie/'
    }
};

// Type Effect Function
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

// Start the type effect
typeEffect("@SHIN", 300); 

// Tooltip Functionality
const tooltip = document.getElementById('tooltip');

document.querySelectorAll('.icon').forEach(button => {
    button.addEventListener('mouseenter', function() {
        const url = this.getAttribute('data-url');
        tooltip.textContent = url; 
        tooltip.style.display = 'block'; 
        const rect = this.getBoundingClientRect(); 
        tooltip.style.left = `${rect.left + window.scrollX}px`; 
        tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`; 
        tooltip.style.opacity = 1; 
    });

    button.addEventListener('mouseleave', function() {
        tooltip.style.opacity = 0; 
        setTimeout(() => {
            tooltip.style.display = 'none'; 
        }, 300); 
    });

    button.addEventListener('click', function() {
        const iconId = Number(this.getAttribute('data-iconId'));
        let platform = '';

        switch (iconId) {
            case 0:
                platform = 'Steam';
                break;
            case 1:
                platform = 'Tellonym';
                break;
            case 2:
                platform = 'Instagram';
                break;
            case 3:
                platform = 'RiotGames';
                break;
            default:
                console.error('No platform found for iconId:', iconId);
                return;
        }

        const data = playerCardData[platform];
        if (data) {
            window.open(data.buttonLink, '_blank'); 
        } else {
            console.error(`No data found for platform: ${platform}`);
        }
    });
});