// counter for name change
var i = 0;

// Orange color palette
let orangeMainColor = 'rgba(255, 168, 59, 255)';
let orangeBackgroundColor = 'rgb(31, 20, 7)';
let orangeButtonHoverColor = 'rgb(175, 114, 39)';

// Blue color palette
let blueMainColor = '#2ecfff';
let blueBackgroundColor = '#0a2c36';
let blueButtonHoverColor = '#1a6a83';

// Green color palette
let greenMainColor = '#1bff80';
let greenBackgroundColor = 'rgb(3, 29, 3)';
let greenButtonHoverColor = 'rgb(13, 131, 13)';

// Change welcome message text and color palette
document.getElementById("website-name").onclick = function myFunction() {
    var newName;
    i++;
    if (i == 0) {
        newName = `       
 ██████╗ █████╗ ██╗     ███████╗██████╗ ██╗   ██╗███████╗██████╗ ███╗   ███╗ █████╗     ██████╗ ██████╗ ███╗   ███╗
██╔════╝██╔══██╗██║     ██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗████╗ ████║██╔══██╗   ██╔════╝██╔═══██╗████╗ ████║
██║     ███████║██║     █████╗  ██████╔╝██║   ██║█████╗  ██████╔╝██╔████╔██║███████║   ██║     ██║   ██║██╔████╔██║
██║     ██╔══██║██║     ██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══██║   ██║     ██║   ██║██║╚██╔╝██║
╚██████╗██║  ██║███████╗███████╗██████╔╝ ╚████╔╝ ███████╗██║  ██║██║ ╚═╝ ██║██║  ██║██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║
 ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝
        `;
        document.documentElement.style.setProperty('--main-color', orangeMainColor);
        document.documentElement.style.setProperty('--background-color', orangeBackgroundColor);
        document.documentElement.style.setProperty('--button-hover-color', orangeButtonHoverColor);
    }
    else if (i == 1) {
        newName = `
 e88~-_            888           888       d88b               e88~-_                                            
d888   \\   /~~~8e  888  e88~~8e  888-~88e  Y88P  d88~\\       d888   \\  e88~-_  888-~\\ 888-~88e  e88~~8e  888-~\\ 
8888           88b 888 d888  88b 888  888b __/  C888         8888     d888   i 888    888  888 d888  88b 888    
8888      e88~-888 888 8888__888 888  8888       Y88b        8888     8888   | 888    888  888 8888__888 888    
Y888   / C888  888 888 Y888    , 888  888P        888D       Y888   / Y888   ' 888    888  888 Y888    , 888    
 "88_-~   "88_-888 888  "88___/  888-_88"       \\_88P         "88_-~   "88_-~  888    888  888  "88___/  888     
        `;
        document.documentElement.style.setProperty('--main-color', greenMainColor);
        document.documentElement.style.setProperty('--background-color', greenBackgroundColor);
        document.documentElement.style.setProperty('--button-hover-color', greenButtonHoverColor);
    }
    else {
        newName = `
▄▄▄█████▓██░ ██▓█████     ▄████▄  ▄▄▄      ██▓   ▓█████ ▄▄▄▄      ▒███████▒▒█████  ███▄    █▓█████ 
   ██▒ ▓▓██░ ██▓█   ▀    ▒██▀ ▀█ ▒████▄   ▓██▒   ▓█   ▀▓█████▄         ███▒██▒  ██▒██ ▀█   █▓█   ▀ 
  ▓██░ ▒▒██▀▀██▒███      ▒▓█    ▄▒██  ▀█▄ ▒██░   ▒███  ▒██▒ ▄██       ███░▒██░  ██▓██  ▀█ ██▒███   
  ▓██▓ ░░▓█ ░██▒▓█  ▄    ▒▓▓▄ ▄██░██▄▄▄▄██▒██░   ▒▓█  ▄▒██░█▀       ███   ▒██   ██▓██▒  ▐▌██▒▓█  ▄ 
  ▒██▒ ░░▓█▒░██░▒████▒    ▒▓███▀ ░▓█   ▓██░██████░▒████░▓█  ▀█▓   ▒███████░ ████▓▒▒██░   ▓██░▒████▒
                                                        ▒▓███▀
        `;
        i = -1;
        document.documentElement.style.setProperty('--main-color', blueMainColor);
        document.documentElement.style.setProperty('--background-color', blueBackgroundColor);
        document.documentElement.style.setProperty('--button-hover-color', blueButtonHoverColor);
    }
    document.getElementById("website-name").innerHTML = newName;
};

// Create Project Cards
function createProjectCard(title, text, imageSrc, targetModalId) {
    return `
    <div class="card" data-bs-toggle="modal" data-bs-target="#${targetModalId}">
        <img src="${imageSrc}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${text}</p>
        </div>
    </div>
    `;
};

// Create Project Detail Modals
function createProjectModal(title, text, imageSrc, id, githubLink, siteLink) {
    // Github and Site buttons are optional
    let githubButton = '';
    let siteButton = '';

    if (githubLink != undefined) {
        githubButton = `
        <a href="${githubLink}" target="_blank" class="btn">
            <span class="btn-unselected"><i class="bi bi-box-arrow-up-right"></i> GitHub
            </span>
            <span class="btn-selected">&gt; <i class="bi bi-box-arrow-up-right"></i> GitHub &lt;</span>
        </a>
    `
    };

    if (siteLink != undefined) {
        siteButton = `
        <a href="${siteLink}" target="_blank" class="btn">
            <span class="btn-unselected"><i class="bi bi-box-arrow-up-right"></i> Site</span>
            <span class="btn-selected">&gt; <i class="bi bi-box-arrow-up-right"></i> Site &lt;</span>
        </a>`
    };

    return `
    <div class="modal fade2" id="${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content-container">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${title}</h1>
                        <p class="close-button" data-bs-dismiss="modal" aria-label="Close">[X]</p>
                    </div>
                    <div class="modal-body">
                        <img class="modal-thumbnail" src="${imageSrc}" />
                        <p>${text}</p>
                    </div>
                    <div class="modal-footer">
                        ${githubButton}
                        ${siteButton}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
};

document.addEventListener('DOMContentLoaded', function () {
    let newName = `       
    ██████╗ █████╗ ██╗     ███████╗██████╗ ██╗   ██╗███████╗██████╗ ███╗   ███╗ █████╗     ██████╗ ██████╗ ███╗   ███╗
   ██╔════╝██╔══██╗██║     ██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗████╗ ████║██╔══██╗   ██╔════╝██╔═══██╗████╗ ████║
   ██║     ███████║██║     █████╗  ██████╔╝██║   ██║█████╗  ██████╔╝██╔████╔██║███████║   ██║     ██║   ██║██╔████╔██║
   ██║     ██╔══██║██║     ██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══██║   ██║     ██║   ██║██║╚██╔╝██║
   ╚██████╗██║  ██║███████╗███████╗██████╔╝ ╚████╔╝ ███████╗██║  ██║██║ ╚═╝ ██║██║  ██║██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║
    ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝
`;
    document.getElementById("website-name").innerHTML = newName;

    // Renr
    // Card
    document.getElementById('renrCardContainer').innerHTML = createProjectCard(
        'RENR Safety App',
        'A web app that digitizes a safety form used by BCIT\'s Renewable Resources (RENR) program.',
        'images/renr2.jpg',
        'renrModal',
    );

    // Modal
    document.getElementById('renrModalContainer').innerHTML = createProjectModal(
        'RENR Safety App',
        'A web app that digitizes a safety form used by BCIT’s Renewable Resources (RENR) program. Allows users to identify hazards when working in the field and ensure they have the appropriate control measures. Frontend built with React, backend built with Firebase. Created with three other team members as part of a 5-week projects course.',
        'images/renr.jpg',
        'renrModal',
        undefined,
        undefined,
    );

    // Bussin
    // Card
    document.getElementById('bussinCardContainer').innerHTML = createProjectCard(
        'Bussin',
        'A transit-focused Android app that allows users to see upcoming bus schedules and real-time bus locations.',
        'images/bussin.jpg',
        'bussinModal',
    );

    // Modal
    document.getElementById('bussinModalContainer').innerHTML = createProjectModal(
        'Bussin',
        'A transit-focused Android app that allows users to see upcoming bus schedules and real-time bus locations. Uses the TransLink API. Built using Java in Android Studio. Created with two other team memebers as part of our Mobile Dev course.',
        'images/bussin.jpg',
        'bussinModal',
        'https://github.com/JacksonMars/AndroidProject',
    );

    // // Cancer Predictor
    // // Card
    // document.getElementById('cancerPredictorCardContainer').innerHTML = createProjectCard(
    //     'Cancer Classifier',
    //     'Using predictive analytics to predict whether a tumor is malignant or benign.',
    //     'images/bongo.jpg',
    //     'cancerPredictorModal',
    // );

    // // Modal
    // document.getElementById('cancerPredictorModalContainer').innerHTML = createProjectModal(
    //     'Cancer Classifier',
    //     'Using predictive analytics to predict whether a tumor is malignant or benign.',
    //     'images/bongo.jpg',
    //     'cancerPredictorModal',
    //     'https://github.com/fijiman24/4949A2',
    //     'https://cancer-5v51.onrender.com/',
    // );

    // Bongo Cat
    // Card
    document.getElementById('bongoCatCardContainer').innerHTML = createProjectCard(
        'Bongo Cat Clone',
        'A simple, fun, musical project made using jQuery.',
        'images/bongo.jpg',
        'bongoModal',
    );

    // Modal
    document.getElementById('bongoCatModalContainer').innerHTML = createProjectModal(
        'Bongo Cat Clone',
        'A simple, fun, musical project made using HTML, CSS, and jQuery. May contain an easter egg or two...',
        'images/bongo.jpg',
        'bongoModal',
        'https://github.com/fijiman24/bongo-cat-clone',
        'https://fijiman24.github.io/bongo-cat-clone/',
    );

    // Sector Six
    // Card
    document.getElementById('sectorSixCardContainer').innerHTML = createProjectCard(
        'Sector Six',
        'A text-based space adventure game made using Python.',
        'images/sector_six.jpg',
        'sectorSixModal',
    );

    // Modal
    document.getElementById('sectorSixModalContainer').innerHTML = createProjectModal(
        'Sector Six',
        'A text-based space adventure game made using Python. Created with a partner as a final project for our Programming Methods course at BCIT. Complete with unit tests for every. Single. Function.',
        'images/sector_six.jpg',
        'sectorSixModal',
        'https://github.com/fijiman24/text-based-adventure',
    );

    // UBC
    // Card
    document.getElementById('ubcCardContainer').innerHTML = createProjectCard(
        'A Heaven of Misery',
        'An essay shared in UBC\'s Art\'s One journal.',
        'images/ubc.jpg',
        'ubcModal',
    );

    // Modal
    document.getElementById('ubcModalContainer').innerHTML = createProjectModal(
        'A Heaven of Misery',
        'An essay shared in UBC\'s Art\'s One 2017 journal. An analysis of William Blake\'s poem "The Chimney Sweeper". Written in my first year at UBC; a relic of a past academic life.',
        'images/ubc.jpg',
        'ubcModal',
        undefined,
        'https://artsone.arts.ubc.ca/news/a-heaven-of-misery/',
    );

    // Trophy Guide
    // Card
    document.getElementById('trophyGuideCardContainer').innerHTML = createProjectCard(
        'Jump King Trophy Guide',
        'A PlayStation trophy guide I wrote for a video game.',
        'images/trophy_guide.jpg',
        'trophyGuideModal',
    );

    // Modal
    document.getElementById('trophyGuideModalContainer').innerHTML = createProjectModal(
        'Jump King Trophy Guide',
        'A PlayStation trophy guide I wrote for a video game. Not academic, but something I\'m proud of (and might serve as a sample of my communication skills).',
        'images/trophy_guide.jpg',
        'trophyGuideModal',
        undefined,
        'https://psnprofiles.com/guide/10474-jump-king-trophy-guide',
    );
});
