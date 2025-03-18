let currentCard = null; 
const backgroundMusic = document.getElementById('backgroundMusic');
const muteButton = document.getElementById('muteButton');
const muteIcon = document.getElementById('muteIcon');
const profileCard = document.querySelector('.profile-card');
const profilePhoto = document.querySelector('.profile-photo');
const navbarToggle = document.getElementById('navbarToggle');
const navbar = document.getElementById('navbar');
const gamesPage = document.getElementById('gamesPage');


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
    
    navbar.style.display = 'flex';
    navbarToggle.style.display = 'block';
});

navbarToggle.addEventListener('click', function() {
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'flex'; 
        setTimeout(() => {
            navbar.classList.add('show'); 
        }, 10); 
    } else {
        navbar.classList.remove('show'); 
        setTimeout(() => {
            navbar.style.display = 'none'; 
        }, 300); 
    }
});

document.getElementById('gamesLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('profileContainer').style.display = 'none';
    navbar.style.display = 'none'; 
    gamesPage.style.display = 'block'; 
    navbarToggle.style.display = 'block'; 
});


document.getElementById('profileLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    gamesPage.style.display = 'none'; 
    document.getElementById('profileContainer').style.display = 'block'; 
    navbar.style.display = 'flex'; 
    navbarToggle.style.display = 'block'; 
});


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


  //--------------------------------------------GAMEPAGE-----------------------------------

  const games = [
    { title: "Aegis Defenders", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/371140/library_600x900.jpg?t=1625007660", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Ace of Protectors", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/398150/library_600x900.jpg?t=1572138304", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "ADOM (Ancient Domains Of Mystery)", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/333300/library_600x900.jpg?t=1728905558", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Ageless", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1210150/library_600x900.jpg?t=1731939952", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Albion Online", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/761890/e8da76d89e37541a0b9957e17874e1a0441d794a/library_600x900.jpg?t=1741889339", platform: "PC", dlc: "No DLC", launcher: "Albion Online" },
    { title: "Among Us", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/945360/library_600x900.jpg?t=1731953093", platform: "PC, Mobile", dlc: "No DLC", launcher: "Steam" },
    { title: "Awesomenauts", imageUrl: "https://e.snmc.io/lk/l/x/0b8b2bc74951b0981a45c876ed334664/11488449", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "BOKURA", imageUrl: "https://e.snmc.io/lk/f/x/137855c42dd04740a1cafd997f863005/9968585", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Batman™: Arkham Origins", imageUrl: "https://e.snmc.io/lk/l/x/1bd42c8ba18f2488089df6283ba6c692/9932170", platform: "PC", dlc: "Season Pass", launcher: "Steam" },
    { title: "Battle for the Galaxy", imageUrl: "https://top-mmorpg.ru/uploads/posts/2020-12/1608889840_battle-for-the-galaxy-top-mmorpg_ru.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Brawlhalla", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/291550/library_600x900.jpg?t=1741184966", platform: "PC", dlc: "Brawlhalla - All Legends", launcher: "Steam" },
    { title: "BlazBlue: Calamity Trigger", imageUrl: "https://cdn2.steamgriddb.com/grid/c3266c64171e9d9a811b688aefaafca2.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Borderlands", imageUrl: "https://e.snmc.io/lk/l/x/7120d81e6a22a77be52dad08d47f0704/8327048", platform: "PC", dlc: "GOTY, Enhanced", launcher: "Steam" },
    { title: "Brothers - A Tale of Two Sons", imageUrl: "https://data.xxlgamer.com/products/5654/SHcR2LbIE5NGCE-big.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Bulletstorm", imageUrl: "https://e.snmc.io/lk/l/x/c434b6714c2c1a3207d9ea3dfd4250b1/11485598", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "BPM: BULLETS PER MINUTE", imageUrl: "https://static.driffle.com/media-gallery/prod/166465326746517900_BPM_Bullets_Per_Minute.webp", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Business Tour - Online Multiplayer Board Game", imageUrl: "https://cdn2.steamgriddb.com/grid/b18ab25c55863311d9909ada83379916.png", platform: "PC, Mobile", dlc: "No DLC", launcher: "Steam" },
    { title: "Castle Crashers", imageUrl: "https://i.redd.it/owimo916yfd91.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Cepheus Protocol", imageUrl: "https://www.bolrix.games/userfiles/7050e164757de6e48f2e2aa3fed34541.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Children of Morta", imageUrl: "https://e.snmc.io/lk/l/x/99135704f54fb4459d4db767ce0db4e4/8877466", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Closers", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8Kyw_uIMnL6Mx0pB0GpqMhSq8lFq9ADJdg&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Control Ultimate Edition", imageUrl: "https://s.pacn.ws/1/p/11p/control-ultimate-edition-678907.10.jpg?v=rynfq7", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Cook, Serve, Delicious! 3?!", imageUrl: "https://images.launchbox-app.com/1bd8e146-68ce-413c-abce-2037a9dc39b2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Cyber Hook", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGgDAxfa4u41RXlqHmYpw0rhT3L1t8U6bVw&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Don't Starve Together", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/322330/library_600x900.jpg?t=1741895207", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "DED", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/571350/library_600x900.jpg?t=1667043210", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Destiny 2", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1085660/f4ea8301f709ec6c18437c028f054020cf3b5b3e/library_600x900.jpg?t=1738688481", platform: "PC", dlc: "Lightfall, The Witch Queen, 30 Year of Bungie, Beyond Light, Shadowkeep, Forsaken", launcher: "Steam" },
    { title: "Dead by Daylight", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/library_600x900.jpg?t=1738165502", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Dead Frontier 2", imageUrl: "https://cdn2.steamgriddb.com/grid/92e1d940432f91fee27509fcfaff9a64.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Deadlock", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLX9w0I7XDV1RUouKKJ1DyvbHHoNEa31dmog&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Deadly Days", imageUrl: "https://static.driffle.com/media-gallery/prod/166331188507443200_Deadly_days.webp", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "DEPLOYMENT", imageUrl: "https://s.pacn.ws/1/p/116/deployment-669125.13.jpg?v=s4tte1&width=800&crop=600,900", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Desolate", imageUrl: "https://byxatab.com/uploads/posts/2021-06/1623004907_desolate.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "DIRT 5", imageUrl: "https://data.xxlgamer.com/products/5072/7ZGx7Fg4GTS6nf-big.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Doki Doki Literature Club", imageUrl: "https://e.snmc.io/lk/l/x/95ba08e0d8c6ee92d2b06ac5257d8979/8870000", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Drake Hollow", imageUrl: "https://images.launchbox-app.com/5c26d009-dfa5-462e-ab4a-9b12e3844a78.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Due Process", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTFL1ZtEI5yR7zHrNGygyO-3-gREJHthOiA&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Dungeon of Elements", imageUrl: "https://i.postimg.cc/fy3m6nrn/dungeonofelements.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Effie", imageUrl: "https://s.pacn.ws/1/p/12d/effie-690823.14.jpg?v=rlr4hw", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "ELDERBORN", imageUrl: "https://images.launchbox-app.com/26be2a42-6fd1-40f1-8a1b-ee050fa4e4d2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "ELEX", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRer4txOX-pXVcJetcA09O2aTlVUn915QaAw&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "ENDLESS™ Space 2", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFM547IxJrmR9VtfpH8nGoIBUSH2EcHvA2g&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Escape the Backrooms", imageUrl: "https://myvideogamelist-com.s3.amazonaws.com/assets/boxart/Sdw63JIbFlPCc9BXcXgnl5MJJxWvGt6U46dlMIOk.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Estranged: The Departure", imageUrl: "https://i.postimg.cc/kX8CPW56/dungeonofelements-1.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "F1 2020", imageUrl: "https://cdn2.steamgriddb.com/grid/2c019b142e30d7c4e821b263780b9c6d.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Family Man", imageUrl: "https://cdn2.steamgriddb.com/grid/52ad97dbfc887b2d7038d28652dc87a5.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "For Honor", imageUrl: "https://www.mmobase.de/img/preisvergleich/for-honor-original.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Frog Detective 1: Die Geisterinsel", imageUrl: "https://cdn2.steamgriddb.com/grid/a6fd867c4b4ae72cba26bdfc4a5170fa.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Frog Detective 2: Die unsichtbare Hexe", imageUrl: "https://e.snmc.io/lk/l/x/ced788cfa1bd5d3dc9508aea07db863a/9941342", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Fury Unleashed", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Fury-Unleashed-4111-1597924353.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Garry's Mod", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/4000/library_600x900_2x.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Gang Beasts", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60WysnHhpJ-iI4UaSykEGKpOXCC8Kks9Gcw&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "GTFO", imageUrl: "https://www.mmobase.de/img/preisvergleich/gtfo-original.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Guilty Gear Isuka", imageUrl: "https://static.driffle.com/media-gallery/prod/167761694657631400_guilty_gear_isuka.webp", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Guilty Gear X2 #Reload", imageUrl: "https://cdn2.steamgriddb.com/grid/63b04336d3be31bbc252183c87b49deb.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Guilty Gear Xrd -SIGN-", imageUrl: "https://static.driffle.com/media-gallery/prod/170375556072325800_520440_1703755568.webp", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Guilty Gear Xrd REV 2", imageUrl: "https://cdn2.steamgriddb.com/grid/11ddcc0d3c60559c2d7cc932bef50d47.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Guilty Gear XX ACCENT CORE PLUS R", imageUrl: "https://gpstatic.com/acache/45/97/1/de/packshot-9376dbd4443c2cf8477c16751e52d5d4.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Half-Life: A Place in the West", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFdtH7KGjqXmwhpN3nO_pFKraEaSQ4vq8Jg&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Hammerting", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyssgooFgmojV8galj-iZsnoQcGvXf5YvIzA&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Helltaker", imageUrl: "https://cdn2.steamgriddb.com/grid/e96de5348d7ade682332a2b4dc5f3e08.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Heavy Metal Machines", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Heavy-Metal-Machines-4962-1597924558.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Homefront", imageUrl: "https://thebinarymessiah.com/wp-content/uploads/2011/03/library_600x900_2x-16.jpg?w=640", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Human Fall Flat", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbOjNA6nmhgrUHWzMCpZnpN0v5ExeBCOFDw&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Hurtworld", imageUrl: "https://s.pacn.ws/1/p/10m/hurtworld-659309.13.jpg?v=rlqib9", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Ikenfell", imageUrl: "https://pliki.ppe.pl/storage/cf25e6a2dc0ddb7acefb/cf25e6a2dc0ddb7acefb.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "In Other Waters", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrkmFGyOPDa__nLZVpMvotxDAWo_7xL2-Xg&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Immortal Soul: Black Survival", imageUrl: "https://media.senscritique.com/media/000021811145/0/black_survival.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Indivisible", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Indivisible-3527-1597922794.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Iris and the giant", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHAWvKwZZbO01RI5ist_jDNnov8m-Mu8ziw&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "It Takes Two", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1426210/library_600x900.jpg?t=1730911936", platform: "PC", dlc: "It Takes Two Friend's Pass", launcher: "Steam" },
    { title: "Juno: New Origins", imageUrl: "https://e.snmc.io/lk/g/x/75c78ffd48ec13850bdaca9151d12ef0/10649430", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Kurtzpel", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/844870/8a3fd4a910fff862c5cdfccebdae64ea104cfd85/library_600x900.jpg?t=1736998800", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Kingdom Come: Deliverance", imageUrl: "https://data.xxlgamer.com/products/4399/abxN6RLuueDQ5u-big.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Kingdom Two Crowns", imageUrl: "https://media.elkjop.com/assets/image/dv_web_D1800010021592844", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Kill It With Fire", imageUrl: "https://images.launchbox-app.com/21d20a04-91ac-46df-a428-41c9f14d990e.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "League Of Legends", imageUrl: "https://cdn2.steamgriddb.com/grid/199c79ae66904c729433196aad9ee951.png", platform: "PC", dlc: "No DLC", launcher: "Riot Games" },
    { title: "Left 4 Dead 2", imageUrl: "https://m.media-amazon.com/images/M/MV5BZmFhN2M4ZTgtYTljMi00ZDczLTgwZGQtOWI0NjE0ZmY0NzhlXkEyXkFqcGc@._V1_.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Lethal Company", imageUrl: "https://e.snmc.io/lk/f/x/a8dae5b773170c7163c176101754903e/11488225", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Little Nightmares", imageUrl: "https://images.launchbox-app.com/63f52c3b-0124-407c-940f-6183f3746c2a.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Lost Ark", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1599340/library_600x900.jpg?t=1736361963", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Lost Saga", imageUrl: "https://i.postimg.cc/q7m4w1W3/lostsagax.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Metro Exodus", imageUrl: "https://e.snmc.io/lk/f/x/b82202e85ca1e0c8c2bd5583d52b1f17/8883297", platform: "PC", dlc: "Enhanced Edition", launcher: "Steam" },
    { title: "Minion Masters", imageUrl: "https://cdn2.steamgriddb.com/grid/e3dc7878c07c53ef5a9f1d9f8160474b.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Minoria", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Minoria-5860-1597925196.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "MOBIUS FINAL FANTASY", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTx7i1XN37SxUF97JTr8yj0I-mdDb-xYZ1eA&s", platform: "PC, Mobile", dlc: "No DLC", launcher: "Steam" },
    { title: "Modern Combat Versus", imageUrl: "https://lh3.googleusercontent.com/proxy/D9_UVDcu2D6x2JeUPX82EEM1echedOmyMCvNrXMYnyqbuZMnGdKlVtSD86Xa5FRkZXakax3sKlHf_uwigUim27LfCc3sHWmPhlD_iW41RUPosQJ1cVj_YN8_O7vkR9iGOQFVc28BmbI", platform: "PC, Mobile", dlc: "No DLC", launcher: "Steam" },
    { title: "Moving Out", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Moving-Out-6538-1597925638.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Mushroom Wars", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjdlVKUiVElnojBI6Ym4-4g8bw6rZyZX2tA&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Nimbatus - The Space Drone Constructor", imageUrl: "https://s.pacn.ws/1/p/137/nimbatus-the-space-drone-constructor-705927.12.jpg?v=rlr4ji", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Neverwinter", imageUrl: "https://cdn2.steamgriddb.com/grid/9a64b68ff2c9b354218e4b014519f28c.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Nowhere Prophet", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Nowhere-Prophet-4658-1597924558.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Odysseus Kosmos and his Robot Quest - Episode 1", imageUrl: "https://s.pacn.ws/1/p/11e/odysseus-kosmos-and-his-robot-quest-episode-1-673135.9.jpg?v=s7uwpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "One Step From Eden", imageUrl: "https://images.launchbox-app.com/d7ae8386-8e36-40b5-90b6-f6f3f895fdbf.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Ori and the Blind Forest", imageUrl: "https://e.snmc.io/lk/l/x/d05be09b22db5b677e761cb1e3675855/11586858", platform: "PC", dlc: "Definitive Edition", launcher: "Steam" },
    { title: "Out of Space", imageUrl: "https://static.driffle.com/media-gallery/prod/166681399742999900_OUT_OF_SPACE.webp", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Outward", imageUrl: "https://images.launchbox-app.com/31170334-00be-4669-804e-49c9ccf8151c.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Overcooked! 2", imageUrl: "https://static.driffle.com/media-gallery/prod/166413660644835100_Overcooked_2.webp", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Paladins", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/444090/library_600x900.jpg?t=1713560419", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Paradise Killer", imageUrl: "https://www.adventurecorner.de/uploads/images/cover2020/paradise-killer-cover.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Path of Exile", imageUrl: "https://howlongtobeat.com/games/6938_Path_of_Exile.png?width=760", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Path of Giants", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyH-djuID9qjWPo0vTOgk1warDGmoW3LFqbQ&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Pathologic 2", imageUrl: "https://e.snmc.io/lk/f/x/463301e29febf33382961db63663f5ab/8867385", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "PAYDAY 2", imageUrl: "https://e.snmc.io/lk/l/x/a1d19fc2953a9a2a5ddf32e9665f5277/11096752", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Peaky Blinders: Mastermind", imageUrl: "https://i.ebayimg.com/images/g/ERkAAOSwZAdmrir4/s-l1200.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Planet Coaster", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Planet-Coaster-2-8766-1720713008.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Planetary Annihilation: TITANS", imageUrl: "https://s.pacn.ws/1/p/ut/planetary-annihilation-titans-554887.10.jpg?v=rlr4me", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Popup Dungeon", imageUrl: "https://static.driffle.com/media-gallery/prod/166410767378344000_Popup_Dungeon.webp", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Predecessor", imageUrl: "https://cdn2.steamgriddb.com/grid/6bef5db7f983a07afd168eda796059d3.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Project Playtime", imageUrl: "https://cdn2.steamgriddb.com/grid/7efecfec628c87c67931da7e5fba8cdb.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Project Wingman", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsq_6ZShiCYlPSZJXl99DUb-Yoz4KNLrUcw&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "PUBG: BATTLEGROUNDS", imageUrl: "https://cdn2.steamgriddb.com/grid/13816ba0dd3a36209cbc3cfef265dc7c.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Relicta", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Relicta-6647-1597925638.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Remothered: Broken Porcelain", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Remothered-Broken-Porcelain-6157-1602626044.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Rust", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/library_600x900.jpg?t=1738927718", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Retimed", imageUrl: "https://images.launchbox-app.com/5e15e008-7914-4ca5-93a9-d364f44e9136.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Ring of Elysium", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNEXXKM3Xbm-goEkHJKuW1Z2KTdZGAuwxUg&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Rivals of Aether", imageUrl: "https://images.cgames.de/images/gsgp/4/13873-default-packshot_6284003.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Rocket League", imageUrl: "https://cdn2.steamgriddb.com/grid/938e3f87e91ee8469e94c3ace50e692d.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "RPG Maker VX Ace", imageUrl: "https://cdn2.steamgriddb.com/grid/d7f5e28f4a82a513a859b4168b7e9566.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Risk of Rain 2", imageUrl: "https://e.snmc.io/lk/l/x/6b805837b90ee32fea3ace6341edbb27/9204550", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "ShellShock Live", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5J5wu4Tng1eK5-t2JCZ_a3_qp4ZakRy8Iw&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Sherlock Holmes: The Devil's Daughter", imageUrl: "https://cdn2.steamgriddb.com/grid/46832b0ca30d9e1da6f151a05299fbeb.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Showdown Bandit", imageUrl: "https://static.wikia.nocookie.net/showdown-bandit/images/3/31/Library_600x900_2x.jpg/revision/latest?cb=20190802170311", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Size Matters", imageUrl: "https://cdn.playsum.live/images/products/aa4648b3-b37e-4a20-9b87-3fbdbbb649be/packshot.jpeg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Sniper Ghost Warrior Contracts", imageUrl: "https://cdn2.steamgriddb.com/grid/6efb433c565b2cfb44e4f4fd8ca1159f.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Sonic Generations", imageUrl: "https://cdn2.steamgriddb.com/grid/09173f02064db85efbbf5e4650f3d44d.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Space Engineers", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Space-Engineers-2453-1681059845.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Space Pilgrim Episode I: Alpha Centauri", imageUrl: "https://cdn2.steamgriddb.com/grid/1f5279edf5ab884893dac1ecdfb812a4.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Spacelords", imageUrl: "https://cdn2.steamgriddb.com/grid/ec3b9ab24c4df83a8e27a82fc37cbab2.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Splitgate", imageUrl: "https://m.media-amazon.com/images/M/MV5BNWRmOGU4MzAtNmJkMy00ZWViLTk3MmItZTI1MTNhMGJiNWI0XkEyXkFqcGc@._V1_.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Stick Fight: The Game", imageUrl: "https://m.media-amazon.com/images/M/MV5BYWQ5ZmM5ZTQtOWRiMS00OTQ4LWIyMTUtMDM2ZDI5MzhhN2YyXkEyXkFqcGc@._V1_.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Still There", imageUrl: "https://s.pacn.ws/1/p/yv/still-there-627729.9.jpg?v=rlr4kg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Stubbs the Zombie in Rebel Without a Pulse", imageUrl: "https://e.snmc.io/lk/l/x/97b26bdb3c9d5b47e1be0aecd6717ae2/11812557", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Supraland", imageUrl: "https://m.media-amazon.com/images/M/MV5BZTJkZGJjMGEtOTUxZi00MDc1LWEwMTYtNDhkMzZkMTZjOWIwXkEyXkFqcGc@._V1_.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "SWINE HD Remaster", imageUrl: "https://static.wikia.nocookie.net/swine/images/a/ac/S.W.I.N.E._HD_Remaster.jpg/revision/latest?cb=20240207160501", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Tabletop Playground", imageUrl: "https://media.indiedb.com/images/games/1/71/70643/tabletop-playground-box.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Tera", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/212740/library_600x900.jpg?t=1656918215", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Tales of the Neon Sea", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Tales-of-the-Neon-Sea-5497-1679050086.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Tell Me Why", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLLLYhaKglyVLmaQlIzdS_KtX_qcSz4OKtw&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Ambassador: Fractured Timelines", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtQzfdis52ylpqiLwWeu7MKv-cKqQPNftHA&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Beast Inside", imageUrl: "https://data.xxlgamer.com/products/4940/Jxk63lBNwC7Qrl-big.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Escapists 2", imageUrl: "https://www.mmobase.de/img/preisvergleich/the-escapists-2-original.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The First Descendant", imageUrl: "https://e.snmc.io/lk/l/x/ac9a8ddbefcda3dd07d89d0c7d3200b5/11734610", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Forest", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/242760/library_600x900.jpg?t=1699381053", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Surge", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa65uZ2TKCR7MwQnsM5oV-0uJn_NysBaZKEw&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Surge 2", imageUrl: "https://e.snmc.io/lk/l/x/9d5ccd50c267b41534ad023272ca8295/8867247", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Wild Eight", imageUrl: "https://pressakey.com/gfxgames/boxart/full/The-Wild-Eight-3861-1599879250.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Witcher 2: Assassins of Kings", imageUrl: "https://wordpress.mittelalter.digital/wp-content/uploads/2020/02/Mittelalter_Medien_Videospiel_The_Witcher_2_Assassins_of_Kings.jpg", platform: "PC", dlc: "Enhanced Edition", launcher: "Steam" },
    { title: "The Witcher 3: Wild Hunt", imageUrl: "https://wordpress.mittelalter.digital/wp-content/uploads/2020/02/Mittelalter_Medien_Videospiel_The_Witcher_3_Wild_Hunt.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Tick Tock: A Tale for Two", imageUrl: "https://media.senscritique.com/media/000020072579/0/tick_tock_a_tale_for_two.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Titanfall® 2", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Titanfall-2-3287-1598302445.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Tom Clancy's Rainbow Six Siege", imageUrl: "https://data.xxlgamer.com/products/3432/8qvEyMpK1SyC69-big.jpg", platform: "PC", dlc: "No DLC", launcher: "Uplay" },
    { title: "Total Tank Simulator", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Total-Tank-Simulator-6522-1597925638.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Train Station Renovation", imageUrl: "https://cdn2.steamgriddb.com/grid/3ed42edbed6fd51061df29f90ea5a77d.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Trine 4: The Nightmare Prince", imageUrl: "https://images.launchbox-app.com/d255178e-86da-422a-9caa-f4b5ded911ae.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Turnip Boy Commits Tax Evasion", imageUrl: "https://e.snmc.io/lk/f/x/8c315b73f3f410b24733a83a10f70df3/8944783", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Valorant", imageUrl: "https://spieleratgeber-nrw.de/wp-content/uploads/2023/02/Valorant_Packshot.jpg", platform: "PC", dlc: "No DLC", launcher: "Riot Games" },
    { title: "Valfaris", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Valfaris-4997-1597924558.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "VR CHAT", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/438100/library_600x900.jpg?t=1733413042", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Valkyria Chronicles 4", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXGUXhANJ9sK1gLZ0JIwk2fT8NUQIPEaVcg&s", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Vampire: The Masquerade - Shadows of New York", imageUrl: "https://e.snmc.io/lk/l/x/ff24c3ea9858ad907e2b13ccd05687fc/8869977", platform: "PC", dlc: "Complete Edition", launcher: "Steam" },
    { title: "Vane", imageUrl: "https://static.driffle.com/media-gallery/prod/166413529235077000_VANE.webp", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Warframe", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/230410/488be6c3c6b077f24eeecceb0a4fe50d7259b80b/library_600x900.jpg?t=1740594560", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "War Thunder", imageUrl: "https://cdn2.steamgriddb.com/grid/865ea15a045d82e7cfee66cce4cb52f4.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Warhammer 40,000: Gladius - Relics of War", imageUrl: "https://cdn2.steamgriddb.com/grid/62606f8a661443de2414767f00147b56.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Warhammer: Chaosbane", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Warhammer-Chaosbane-5618-1597924844.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "We Were Here", imageUrl: "https://www.co-optimus.com/image.php?id=8773", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "We Were Here Expeditions: The FriendShip", imageUrl: "https://i.postimg.cc/D0Hxy85x/wewerehere-Ex.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "We Were Here Forever", imageUrl: "https://pressakey.com/gfxgames/boxart/full/We-Were-Here-Forever-7114-1652082005.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "We Were Here Together", imageUrl: "https://e.snmc.io/lk/l/x/e36b67e7ffe646b6bfc5c124ecd050d2/8884705", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Werewolf: The Apocalypse - Heart of the Forest", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Werewolf-The-Apocalypse-Heart-of-the-Forest-6923-1598716924.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "WINGSPAN (FLÜGELSCHLAG)", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Wingspan-7194-1618140725.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Worms Rumble", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Worms-Rumble-6820-1597926143.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "WWE 2K BATTLEGROUNDS", imageUrl: "https://s.pacn.ws/1/p/12p/wwe-2k-battlegrounds-696561.7.jpg?v=s95i7j", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "X-Blades", imageUrl: "https://e.snmc.io/lk/g/x/0671b63ebbcadf9ab6e63fcc0bee9ef1/11711609", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "XCOM: Chimera Squad", imageUrl: "https://images.ctfassets.net/wn7ipiv9ue5v/136yhz4Zwbwit8BaslfPhx/5a77e06e74c0f5dfd8b916d42e1b72eb/Mask_Group__1_.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Yakuza 3 Remastered", imageUrl: "https://steamdeckhq.com/wp-content/uploads/2023/01/Yakuza3Grid.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Yooka-Laylee", imageUrl: "https://pressakey.com/gfxgames/boxart/full/Yooka-Laylee-3288-1635677046.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Zwei: The Arges Adventure", imageUrl: "https://cdn2.steamgriddb.com/grid/0f49947d8bd049be3caf963a6b434e37.png", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Zwei: The Ilvard Insurrection", imageUrl: "https://images.launchbox-app.com/8cda7126-9a58-4ff7-8787-3b062f48155d.png", platform: "PC", dlc: "No DLC", launcher: "Steam" }
];
  
  const playerCardsContainer = document.getElementById('playerCardsContainer');
  const gameInfoCard = document.getElementById('gameInfoCard');
  const gameTitle = document.getElementById('gameTitle');
  const gamePlatform = document.getElementById('gamePlatform');
  const gameDLC = document.getElementById('gameDLC');
  const closeInfoCard = document.getElementById('closeInfoCard');
  

  games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'player-card';
    
    const img = document.createElement('img');
    img.src = game.imageUrl;
    img.alt = game.title;
    img.style.width = '100%';
    img.style.borderRadius = '10px'; 
  
    const title = document.createElement('h2');
    title.textContent = game.title;
    title.style.color = 'white'; 
  
    card.appendChild(img);
    card.appendChild(title);
    
    
    card.addEventListener('mousemove', (e) => {
      const { offsetWidth, offsetHeight } = card;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;  
  
      const centerX = offsetWidth / 2;
      const centerY = offsetHeight / 2;
  
      const deltaX = (x - centerX) / centerX; 
      const deltaY = (y - centerY) / centerY; 
  
      const tiltX = deltaY * 10; 
      const tiltY = -deltaX * 10; 
  
      card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  
 
card.addEventListener('click', () => {
    gameTitle.textContent = game.title;
    gamePlatform.textContent = game.platform;
    gameDLC.textContent = game.dlc;
    gameLauncher.textContent = game.launcher;
    gameInfoCard.style.display = 'block';
});
  
    playerCardsContainer.appendChild(card);
  });
  

  closeInfoCard.addEventListener('click', () => {
    gameInfoCard.style.display = 'none'; 
  });
  