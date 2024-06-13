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
    title: "Bussin'",
    text: "A transit-focused Android app that allows users to see upcoming bus schedules and real-time bus locations.",
    imageSrc: "images/bussin.jpg",
    id: "bussin",
    githubLink: "https://github.com/JacksonMars/AndroidProject",
    siteLink: undefined,
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
    text: "An essay shared in UBC's Arts One journal.",
    imageSrc: "images/ubc.jpg",
    id: "ubc",
    githubLink: undefined,
    siteLink:
      "https://artsone.arts.ubc.ca/student-journal/songs-of-innocence-and-of-experience-a-heaven-of-misery/",
  },
  {
    title: "PlayStation Trophy Guides",
    text: "Trophy guides for Jump King and Wild Hearts.",
    imageSrc: "images/trophy_guides.jpg",
    id: "trophyGuide",
    githubLink: undefined,
    siteLink: "https://psnprofiles.com/guides/FijiMan24",
  },
  {
    title: "Cancer Classifier",
    text: "Using predictive analytics to predict whether a tumor is malignant or benign.",
    imageSrc: "images/cancer.jpg",
    id: "cancerPredictor",
    githubLink: "https://github.com/fijiman24/4949A2",
    // siteLink: "https://cancer-5v51.onrender.com/", Loads too slowly
    siteLink: undefined
  },
];

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

const populateProjects = () => {
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
};

export default populateProjects;
