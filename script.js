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
    { title: "Aegis Defenders", imageUrl: "https://example.com/aegis_defenders.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Ace of Protectors", imageUrl: "https://example.com/ace_of_protectors.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "ADOM (Ancient Domains Of Mystery)", imageUrl: "https://example.com/adom.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Ageless", imageUrl: "https://example.com/ageless.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Albion Online", imageUrl: "https://example.com/albion_online.jpg", platform: "PC", dlc: "No DLC", launcher: "Albion Online" },
    { title: "Among Us", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/945360/library_600x900.jpg?t=1731953093", platform: "PC, Mobile", dlc: "No DLC", launcher: "Steam" },
    { title: "Argo", imageUrl: "https://example.com/argo.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Arma 2: Free", imageUrl: "https://example.com/arma2_free.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Aven Colony", imageUrl: "https://example.com/aven_colony.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Awesomenauts", imageUrl: "https://example.com/awesomenauts.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "BOKURA", imageUrl: "https://example.com/bokura.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Batman™: Arkham Origins", imageUrl: "https://example.com/batman_arkham_origins.jpg", platform: "PC", dlc: "Season Pass", launcher: "Steam" },
    { title: "Battle for the Galaxy", imageUrl: "https://example.com/battle_for_the_galaxy.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Battle vs Chess", imageUrl: "https://example.com/battle_vs_chess.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Brawlhalla", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/291550/library_600x900.jpg?t=1741184966", platform: "PC", dlc: "Brawlhalla - All Legends", launcher: "Steam" },
    { title: "Blade Symphony", imageUrl: "https://example.com/blade_symphony.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "BlazBlue: Calamity Trigger", imageUrl: "https://example.com/blazblue_calamity_trigger.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Block Dungeon", imageUrl: "https://example.com/block_dungeon.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Boomerang Fu", imageUrl: "https://example.com/boomerang_fu.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Borderlands GOTY", imageUrl: "https://example.com/borderlands_goty.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Borderlands GOTY Enhanced", imageUrl: "https://example.com/borderlands_goty_enhanced.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Brothers - A Tale of Two Sons", imageUrl: "https://example.com/brothers_a_tale_of_two_sons.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Bulletstorm", imageUrl: "https://example.com/bulletstorm.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "BPM: BULLETS PER MINUTE", imageUrl: "https://example.com/bpm_bullets_per_minute.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Business Tour - Online Multiplayer Board Game", imageUrl: "https://example.com/business_tour.jpg", platform: "PC, Mobile", dlc: "No DLC", launcher: "Steam" },
    { title: "Call to Arms", imageUrl: "https://example.com/call_to_arms.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Castle Crashers", imageUrl: "https://example.com/castle_crashers.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Cepheus Protocol", imageUrl: "https://example.com/cepheus_protocol.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Children of Morta", imageUrl: "https://example.com/children_of_morta.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Chocolate makes you happy 5", imageUrl: "https://example.com/chocolate_makes_you_happy_5.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Chocolate makes you happy 6", imageUrl: "https://example.com/chocolate_makes_you_happy_6.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Chocolate makes you happy: Halloween", imageUrl: "https://example.com/chocolate_makes_you_happy_halloween.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Closers", imageUrl: "https://example.com/closers.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Control Ultimate Edition", imageUrl: "https://example.com/control_ultimate_edition.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Cook, Serve, Delicious! 3?!", imageUrl: "https://example.com/cook_serve_delicious_3.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Cyber Hook", imageUrl: "https://example.com/cyber_hook.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Don't Starve Together", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/322330/library_600x900.jpg?t=1741895207", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "DED", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/571350/library_600x900.jpg?t=1667043210", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Destiny 2", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1085660/f4ea8301f709ec6c18437c028f054020cf3b5b3e/library_600x900.jpg?t=1738688481", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Dead by Daylight", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/library_600x900.jpg?t=1738165502", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Dead Frontier 2", imageUrl: "https://example.com/dead_frontier_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Deadlock", imageUrl: "https://example.com/deadlock.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Deadly Days", imageUrl: "https://example.com/deadly_days.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Deleveled", imageUrl: "https://example.com/deleveled.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "DEPLOYMENT", imageUrl: "https://example.com/deployment.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Desolate", imageUrl: "https://example.com/desolate.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "DIRT 5", imageUrl: "https://example.com/dirt_5.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Doki Doki Literature Club", imageUrl: "https://example.com/doki_doki_literature_club.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Drake Hollow", imageUrl: "https://example.com/drake_hollow.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "DRONE The Game", imageUrl: "https://example.com/drone_the_game.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "DRONE The Game Demo", imageUrl: "https://example.com/drone_the_game_demo.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Due Process", imageUrl: "https://example.com/due_process.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Dungeon of Elements", imageUrl: "https://example.com/dungeon_of_elements.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Effie", imageUrl: "https://example.com/effie.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "ELDERBORN", imageUrl: "https://example.com/elderborn.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "ELEX", imageUrl: "https://example.com/elex.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "ENDLESS™ Space 2", imageUrl: "https://example.com/endless_space_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Enigmoon", imageUrl: "https://example.com/enigmoon.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Escape the Backrooms", imageUrl: "https://example.com/escape_the_backrooms.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Estranged: The Departure", imageUrl: "https://example.com/estranged_the_departure.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "F1 2020", imageUrl: "https://example.com/f1_2020.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Family Man", imageUrl: "https://example.com/family_man.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "For Honor", imageUrl: "https://example.com/for_honor.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "For Honor - Public Test", imageUrl: "https://example.com/for_honor_public_test.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Frog Detective 1: Die Geisterinsel", imageUrl: "https://example.com/frog_detective_1.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Frog Detective 2: Die unsichtbare Hexe", imageUrl: "https://example.com/frog_detective_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Fury Unleashed", imageUrl: "https://example.com/fury_unleashed.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Garry's Mod", imageUrl: "https://example.com/garrys_mod.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Gang Beasts", imageUrl: "https://example.com/gang_beasts.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "GTFO", imageUrl: "https://example.com/gtfo.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Guilty Gear Isuka", imageUrl: "https://example.com/guilty_gear_isuka.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Guilty Gear X2 #Reload", imageUrl: "https://example.com/guilty_gear_x2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Guilty Gear Xrd -SIGN-", imageUrl: "https://example.com/guilty_gear_xrd_sign.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Guilty Gear Xrd REV 2", imageUrl: "https://example.com/guilty_gear_xrd_rev_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Guilty Gear XX ACCENT CORE PLUS R", imageUrl: "https://example.com/guilty_gear_xx.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Half-Life: A Place in the West", imageUrl: "https://example.com/half_life_place_in_the_west.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Hammerting", imageUrl: "https://example.com/hammerting.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Helltaker", imageUrl: "https://example.com/helltaker.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Heavy Metal Machines", imageUrl: "https://example.com/heavy_metal_machines.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Homefront", imageUrl: "https://example.com/homefront.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Human Fall Flat", imageUrl: "https://example.com/human_fall_flat.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Hurtworld", imageUrl: "https://example.com/hurtworld.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Ikenfell", imageUrl: "https://example.com/ikenfell.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "In Other Waters", imageUrl: "https://example.com/in_other_waters.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Immortal Soul: Black Survival", imageUrl: "https://example.com/immortal_soul.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Indivisible", imageUrl: "https://example.com/indivisible.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Iris and the giant", imageUrl: "https://example.com/iris_and_the_giant.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "It Takes Two", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1426210/library_600x900.jpg?t=1730911936", platform: "PC", dlc: "It Takes Two Friend's Pass", launcher: "Steam" },
    { title: "Juno: New Origins", imageUrl: "https://example.com/juno_new_origins.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Kurtzpel", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/844870/8a3fd4a910fff862c5cdfccebdae64ea104cfd85/library_600x900.jpg?t=1736998800", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Kingdom Come: Deliverance", imageUrl: "https://example.com/kingdom_come_deliverance.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Kingdom Two Crowns", imageUrl: "https://example.com/kingdom_two_crowns.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Kidz", imageUrl: "https://example.com/kidz.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Kill It With Fire", imageUrl: "https://example.com/kill_it_with_fire.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "KillStreak.tv", imageUrl: "https://example.com/killstreak_tv.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "League Of Legends", imageUrl: "https://cdn2.steamgriddb.com/grid/199c79ae66904c729433196aad9ee951.png", platform: "PC", dlc: "No DLC", launcher: "Riot Games" },
    { title: "Left 4 Dead 2", imageUrl: "https://example.com/left_4_dead_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Lethal Company", imageUrl: "https://example.com/lethal_company.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Little Nightmares", imageUrl: "https://example.com/little_nightmares.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Lost Ark", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1599340/library_600x900.jpg?t=1736361963", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Lost Saga North America", imageUrl: "https://example.com/lost_saga_north_america.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Midas Gold Plus", imageUrl: "https://example.com/midas_gold_plus.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Metro Exodus", imageUrl: "https://example.com/metro_exodus.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Metro Exodus Enhanced Edition", imageUrl: "https://example.com/metro_exodus_enhanced.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Minion Masters", imageUrl: "https://example.com/minion_masters.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Minoria", imageUrl: "https://example.com/minoria.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "MOBIUS FINAL FANTASY", imageUrl: "https://example.com/mobius_final_fantasy.jpg", platform: "PC, Mobile", dlc: "No DLC", launcher: "Steam" },
    { title: "Modern Combat Versus", imageUrl: "https://example.com/modern_combat_versus.jpg", platform: "PC, Mobile", dlc: "No DLC", launcher: "Steam" },
    { title: "Moving Out", imageUrl: "https://example.com/moving_out.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Mushroom Wars", imageUrl: "https://example.com/mushroom_wars.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Nimbatus - The Space Drone Constructor", imageUrl: "https://example.com/nimbatus.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Neverwinter", imageUrl: "https://example.com/neverwinter.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Nowhere Prophet", imageUrl: "https://example.com/nowhere_prophet.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Oik Memory 2", imageUrl: "https://example.com/oik_memory_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Odysseus Kosmos and his Robot Quest - Episode 1", imageUrl: "https://example.com/odysseus_kosmos.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "One Step From Eden", imageUrl: "https://example.com/one_step_from_eden.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Ori and the Blind Forest", imageUrl: "https://example.com/ori_and_the_blind_forest.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Ori and the Blind Forest: Definitive Edition", imageUrl: "https://example.com/ori_definitive_edition.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Out of Space", imageUrl: "https://example.com/out_of_space.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Outward", imageUrl: "https://example.com/outward.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Overcooked! 2", imageUrl: "https://example.com/overcooked_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Paladins", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/444090/library_600x900.jpg?t=1713560419", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Paradise Killer", imageUrl: "https://example.com/paradise_killer.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Path of Exile", imageUrl: "https://example.com/path_of_exile.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Path of Giants", imageUrl: "https://example.com/path_of_giants.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Pathologic 2", imageUrl: "https://example.com/pathologic_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "PAYDAY 2", imageUrl: "https://example.com/payday_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Peaky Blinders: Mastermind", imageUrl: "https://example.com/peaky_blinders_mastermind.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Pixel Hentai Mosaic", imageUrl: "https://example.com/pixel_hentai_mosaic.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Planet Coaster", imageUrl: "https://example.com/planet_coaster.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Planetary Annihilation: TITANS", imageUrl: "https://example.com/planetary_annihilation_titans.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Popup Dungeon", imageUrl: "https://example.com/popup_dungeon.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Predecessor", imageUrl: "https://example.com/predecessor.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Project Playtime", imageUrl: "https://example.com/project_playtime.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Project Wingman", imageUrl: "https://example.com/project_wingman.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "PUBG: BATTLEGROUNDS", imageUrl: "https://example.com/pubg.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Relicta", imageUrl: "https://example.com/relict.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Remothered: Broken Porcelain", imageUrl: "https://example.com/remothered_broken_porcelain.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Rust", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/library_600x900.jpg?t=1738927718", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Rescue Operation", imageUrl: "https://example.com/rescue_operation.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Retimed", imageUrl: "https://example.com/retimed.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Ring of Elysium", imageUrl: "https://example.com/ring_of_elysium.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Rivals of Aether", imageUrl: "https://example.com/rivals_of_aether.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Rock of Ages 3: Make & Break", imageUrl: "https://example.com/rock_of_ages_3.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Rocket League", imageUrl: "https://example.com/rocket_league.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "RPG Maker VX Ace", imageUrl: "https://example.com/rpg_maker_vx_ace.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Risk of Rain 2", imageUrl: "https://example.com/risk_of_rain_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "ShellShock Live", imageUrl: "https://example.com/shellshock_live.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Sherlock Holmes: The Devil's Daughter", imageUrl: "https://example.com/sherlock_holmes.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Showdown Bandit", imageUrl: "https://example.com/showdown_bandit.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "SIMULACRA", imageUrl: "https://example.com/simulacra.jpg", platform: "PC, Mobile", dlc: "No DLC", launcher: "Steam" },
    { title: "SIMULACRA 2", imageUrl: "https://example.com/simulacra_2.jpg", platform: "PC, Mobile", dlc: "No DLC", launcher: "Steam" },
    { title: "Size Matters", imageUrl: "https://example.com/size_matters.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Sniper 3D Assassin: Shoot to Kill", imageUrl: "https://example.com/sniper_3d_assassin.jpg", platform: "PC, Mobile", dlc: "No DLC", launcher: "Steam" },
    { title: "Sniper Ghost Warrior Contracts", imageUrl: "https://example.com/sniper_ghost_warrior_contracts.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Sonic Generations", imageUrl: "https://example.com/sonic_generations.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Space Engineers", imageUrl: "https://example.com/space_engineers.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Space Pilgrim Episode I: Alpha Centauri", imageUrl: "https://example.com/space_pilgrim.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Spacelords", imageUrl: "https://example.com/spacelords.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Splitgate", imageUrl: "https://example.com/splitgate.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Stick Fight: The Game", imageUrl: "https://example.com/stick_fight.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Still There", imageUrl: "https://example.com/still_there.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Stubbs the Zombie in Rebel Without a Pulse", imageUrl: "https://example.com/stubbs_the_zombie.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Supraland", imageUrl: "https://example.com/supraland.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "SWINE HD Remaster", imageUrl: "https://example.com/swine_hd_remaster.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Tabletop Playground", imageUrl: "https://example.com/tabletop_playground.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Tera", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/212740/library_600x900.jpg?t=1656918215", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Tales of the Neon Sea", imageUrl: "https://example.com/tales_of_the_neon_sea.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Tell Me Why", imageUrl: "https://example.com/tell_me_why.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Ambassador: Fractured Timelines", imageUrl: "https://example.com/the_ambassador.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Beast Inside", imageUrl: "https://example.com/the_beast_inside.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Escapists 2", imageUrl: "https://example.com/the_escapists_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The First Descendant", imageUrl: "https://example.com/the_first_descendant.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Forest", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/242760/library_600x900.jpg?t=1699381053", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Surge", imageUrl: "https://example.com/the_surge.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Surge 2", imageUrl: "https://example.com/the_surge_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Wild Eight", imageUrl: "https://example.com/the_wild_eight.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Witcher 2: Assassins of Kings Enhanced Edition", imageUrl: "https://example.com/the_witcher_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "The Witcher 3: Wild Hunt", imageUrl: "https://example.com/the_witcher_3.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Tick Tock: A Tale for Two", imageUrl: "https://example.com/tick_tock.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Titanfall® 2", imageUrl: "https://example.com/titanfall_2.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Tom Clancy's Rainbow Six Siege", imageUrl: "https://example.com/rainbow_six_siege.jpg", platform: "PC", dlc: "No DLC", launcher: "Uplay" },
    { title: "Total Tank Simulator", imageUrl: "https://example.com/total_tank_simulator.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Train Station Renovation", imageUrl: "https://example.com/train_station_renovation.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Trine 4: The Nightmare Prince", imageUrl: "https://example.com/trine_4.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Turnip Boy Commits Tax Evasion", imageUrl: "https://example.com/turnip_boy.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Valorant", imageUrl: "https://spieleratgeber-nrw.de/wp-content/uploads/2023/02/Valorant_Packshot.jpg", platform: "PC", dlc: "No DLC", launcher: "Riot Games" },
    { title: "Valfaris", imageUrl: "https://example.com/valfaris.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "VR CHAT", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/438100/library_600x900.jpg?t=1733413042", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Valkyria Chronicles 4 Complete Edition", imageUrl: "https://example.com/valkyria_chronicles_4.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Vampire: The Masquerade - Shadows of New York", imageUrl: "https://example.com/vampire_shadows_of_new_york.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Vane", imageUrl: "https://example.com/vane.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Vox", imageUrl: "https://example.com/vox.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Warframe", imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/230410/488be6c3c6b077f24eeecceb0a4fe50d7259b80b/library_600x900.jpg?t=1740594560", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "War Thunder", imageUrl: "https://example.com/war_thunder.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Warhammer 40,000: Gladius - Relics of War", imageUrl: "https://example.com/warhammer_gladius.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Warhammer: Chaosbane", imageUrl: "https://example.com/warhammer_chaosbane.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "We Need To Go Deeper", imageUrl: "https://example.com/we_need_to_go_deeper.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "We Were Here", imageUrl: "https://example.com/we_were_here.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "We Were Here Expeditions: The FriendShip", imageUrl: "https://example.com/we_were_here_expeditions.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "We Were Here Forever", imageUrl: "https://example.com/we_were_here_forever.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "We Were Here Together", imageUrl: "https://example.com/we_were_here_together.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Werewolf: The Apocalypse - Heart of the Forest", imageUrl: "https://example.com/werewolf_apocalypse.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "WINGSPAN (FLÜGELSCHLAG)", imageUrl: "https://example.com/wingspan.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Worms Rumble", imageUrl: "https://example.com/worms_rumble.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "WRATH: Aeon of Ruin", imageUrl: "https://example.com/wrath_aeon_of_ruin.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "WWE 2K BATTLEGROUNDS", imageUrl: "https://example.com/wwe_2k_battlegrounds.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "X-Blades", imageUrl: "https://example.com/x_blades.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "XCOM: Chimera Squad", imageUrl: "https://example.com/xcom_chimera_squad.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Yakuza 3 Remastered", imageUrl: "https://example.com/yakuza_3_remastered.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Yon Paradox", imageUrl: "https://example.com/yon_paradox.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Yooka-Laylee", imageUrl: "https://example.com/yooka_laylee.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Zwei: The Arges Adventure", imageUrl: "https://example.com/zwei_arges_adventure.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" },
    { title: "Zwei: The Ilvard Insurrection", imageUrl: "https://example.com/zwei_ilvard_insurrection.jpg", platform: "PC", dlc: "No DLC", launcher: "Steam" }
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
  