const colorPalettes = {
  orange: {
    mainColor: "rgba(255, 168, 59, 255)",
    backgroundColor: "rgb(31, 20, 7)",
    buttonHoverColor: "rgb(175, 114, 39)",
  },
  blue: {
    mainColor: "#2ecfff",
    backgroundColor: "#0a2c36",
    buttonHoverColor: "#1a6a83",
  },
  green: {
    mainColor: "#1bff80",
    backgroundColor: "rgb(3, 29, 3)",
    buttonHoverColor: "rgb(13, 131, 13)",
  },
};

const welcomeMessages = [
  {
    message: (newName = `       
 ██████╗ █████╗ ██╗     ███████╗██████╗ ██╗   ██╗███████╗██████╗ ███╗   ███╗ █████╗     ██████╗ ██████╗ ███╗   ███╗
██╔════╝██╔══██╗██║     ██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗████╗ ████║██╔══██╗   ██╔════╝██╔═══██╗████╗ ████║
██║     ███████║██║     █████╗  ██████╔╝██║   ██║█████╗  ██████╔╝██╔████╔██║███████║   ██║     ██║   ██║██╔████╔██║
██║     ██╔══██║██║     ██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══██║   ██║     ██║   ██║██║╚██╔╝██║
╚██████╗██║  ██║███████╗███████╗██████╔╝ ╚████╔╝ ███████╗██║  ██║██║ ╚═╝ ██║██║  ██║██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║
 ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝
        `),
    colorPalette: colorPalettes.orange,
  },
  {
    message: `
 e88~-_            888           888       d88b               e88~-_                                            
d888   \\   /~~~8e  888  e88~~8e  888-~88e  Y88P  d88~\\       d888   \\  e88~-_  888-~\\ 888-~88e  e88~~8e  888-~\\ 
8888           88b 888 d888  88b 888  888b __/  C888         8888     d888   i 888    888  888 d888  88b 888    
8888      e88~-888 888 8888__888 888  8888       Y88b        8888     8888   | 888    888  888 8888__888 888    
Y888   / C888  888 888 Y888    , 888  888P        888D       Y888   / Y888   ' 888    888  888 Y888    , 888    
 "88_-~   "88_-888 888  "88___/  888-_88"       \\_88P         "88_-~   "88_-~  888    888  888  "88___/  888     
        `, // your welcome message here
    colorPalette: colorPalettes.green,
  },
  {
    message: `
▄▄▄█████▓██░ ██▓█████     ▄████▄  ▄▄▄      ██▓   ▓█████ ▄▄▄▄      ▒███████▒▒█████  ███▄    █▓█████ 
   ██▒ ▓▓██░ ██▓█   ▀    ▒██▀ ▀█ ▒████▄   ▓██▒   ▓█   ▀▓█████▄         ███▒██▒  ██▒██ ▀█   █▓█   ▀ 
  ▓██░ ▒▒██▀▀██▒███      ▒▓█    ▄▒██  ▀█▄ ▒██░   ▒███  ▒██▒ ▄██       ███░▒██░  ██▓██  ▀█ ██▒███   
  ▓██▓ ░░▓█ ░██▒▓█  ▄    ▒▓▓▄ ▄██░██▄▄▄▄██▒██░   ▒▓█  ▄▒██░█▀       ███   ▒██   ██▓██▒  ▐▌██▒▓█  ▄ 
  ▒██▒ ░░▓█▒░██░▒████▒    ▒▓███▀ ░▓█   ▓██░██████░▒████░▓█  ▀█▓   ▒███████░ ████▓▒▒██░   ▓██░▒████▒
                                                        ▒▓███▀
        `, // your welcome message here
    colorPalette: colorPalettes.blue,
  },
];

const projects = [
  {
    title: "RENR Safety App",
    text: "A web app that digitizes a safety form used by BCIT's Renewable Resources (RENR) program.",
    imageSrc: "images/renr2.jpg",
    id: "renr",
    githubLink: undefined,
    siteLink: "https://renr-bcit.web.app/login",
  },
  {
    title: "WhatUGot?",
    text: "An Android app for managing inventory.",
    imageSrc: "images/inventory_manager.jpg",
    id: "inventory",
    githubLink: "https://github.com/fijiman24/InventoryManager",
    siteLink: undefined,
  },
  {
    title: "Bongo Cat Clone",
    text: "A simple, fun, musical project made using jQuery.",
    imageSrc: "images/bongo.jpg",
    id: "bongoCat",
    githubLink: "https://github.com/fijiman24/bongo-cat-clone",
    siteLink: "https://fijiman24.github.io/bongo-cat-clone/",
  },
  {
    title: "Sector Six",
    text: "A text-based space adventure game made using Python.",
    imageSrc: "images/sector_six.jpg",
    id: "sectorSix",
    githubLink: "https://github.com/fijiman24/text-based-adventure",
    siteLink: undefined,
  },
  {
    title: "A Heaven of Misery",
    text: "An essay shared in UBC's Art's One journal.",
    imageSrc: "images/ubc.jpg",
    id: "ubc",
    githubLink: undefined,
    siteLink:
      "https://artsone.arts.ubc.ca/student-journal/songs-of-innocence-and-of-experience-a-heaven-of-misery/",
  },
  {
    title: "Jump King Trophy Guide",
    text: "A PlayStation trophy guide I wrote for a video game.",
    imageSrc: "images/trophy_guide.jpg",
    id: "trophyGuide",
    githubLink: undefined,
    siteLink: "https://psnprofiles.com/guide/10474-jump-king-trophy-guide",
  },
  //   {
  //     title: "Cancer Classifier",
  //     text: "Using predictive analytics to predict whether a tumor is malignant or benign.",
  //     imageSrc: "images/bongo.jpg",
  //     id: "cancerPredictor",
  //     githubLink: "https://github.com/fijiman24/4949A2",
  //     siteLink: "https://cancer-5v51.onrender.com/",
  //   },
];

// Counter for name change
var i = 0;

// Change welcome message text and color palette
document.getElementById("website-name").onclick = function myFunction() {
  i = (i + 1) % welcomeMessages.length;
  const { message, colorPalette } = welcomeMessages[i];
  document.getElementById("website-name").innerHTML = message;
  document.documentElement.style.setProperty(
    "--main-color",
    colorPalette.mainColor
  );
  document.documentElement.style.setProperty(
    "--background-color",
    colorPalette.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--button-hover-color",
    colorPalette.buttonHoverColor
  );
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
}

// Create Project Detail Modals
function createProjectModal(title, text, imageSrc, id, githubLink, siteLink) {
  // Github and Site buttons are optional
  let githubButton = "";
  let siteButton = "";

  if (githubLink != undefined) {
    githubButton = `
        <a href="${githubLink}" target="_blank" class="btn">
            <span class="btn-unselected"><i class="bi bi-box-arrow-up-right"></i> GitHub
            </span>
            <span class="btn-selected">&gt; <i class="bi bi-box-arrow-up-right"></i> GitHub &lt;</span>
        </a>
    `;
  }

  if (siteLink != undefined) {
    siteButton = `
        <a href="${siteLink}" target="_blank" class="btn">
            <span class="btn-unselected"><i class="bi bi-box-arrow-up-right"></i> Site</span>
            <span class="btn-selected">&gt; <i class="bi bi-box-arrow-up-right"></i> Site &lt;</span>
        </a>`;
  }

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
    `;
}

document.addEventListener("DOMContentLoaded", function () {
  // Set default website header
  let newName = `       
    ██████╗ █████╗ ██╗     ███████╗██████╗ ██╗   ██╗███████╗██████╗ ███╗   ███╗ █████╗     ██████╗ ██████╗ ███╗   ███╗
   ██╔════╝██╔══██╗██║     ██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗████╗ ████║██╔══██╗   ██╔════╝██╔═══██╗████╗ ████║
   ██║     ███████║██║     █████╗  ██████╔╝██║   ██║█████╗  ██████╔╝██╔████╔██║███████║   ██║     ██║   ██║██╔████╔██║
   ██║     ██╔══██║██║     ██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══██║   ██║     ██║   ██║██║╚██╔╝██║
   ╚██████╗██║  ██║███████╗███████╗██████╔╝ ╚████╔╝ ███████╗██║  ██║██║ ╚═╝ ██║██║  ██║██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║
    ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝
`;
  document.getElementById("website-name").innerHTML = newName;

  // Create cards and modals for each project
  projects.forEach((project) => {
    const cardHtml = createProjectCard(
      project.title,
      project.text,
      project.imageSrc,
      project.id
    );
    const modalHtml = createProjectModal(
      project.title,
      project.text,
      project.imageSrc,
      project.id,
      project.githubLink,
      project.siteLink
    );

    document.getElementById(`${project.id}CardContainer`).innerHTML = cardHtml;
    document.getElementById(`${project.id}ModalContainer`).innerHTML =
      modalHtml;
  });
});
