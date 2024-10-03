const workExperience = [
  {
    title: "AI Trainer @ DataAnnotation",
    text: "Conducted high-quality data labeling to train machine learning models, contributing to the improvement of AI systems.",
    imageSrc: "images/dataannotation.jpg",
    id: "dataAnnotation",
    siteLink: "https://www.dataannotation.tech",
  },
  {
    title: "Test Enablement Co-op @ Visier, Inc.",
    text: "Managed failing test scripts and applied the appropriate solution: either modifying the failing test or notifying developers.",
    imageSrc: "images/visier.jpg",
    id: "visier",
    siteLink: "https://www.visier.com/",
  },
];

// Create Work Experience Cards
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

// Create Work Experience Detail Modals
function createProjectModal(title, text, imageSrc, id, siteLink) {
  // Github and Site buttons are optional
  let siteButton = "";

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
                        ${siteButton}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

const populateWorkExperience = () => {
  workExperience.forEach((experience) => {
    const cardHtml = createProjectCard(
      experience.title,
      experience.text,
      experience.imageSrc,
      experience.id
    );
    const modalHtml = createProjectModal(
      experience.title,
      experience.text,
      experience.imageSrc,
      experience.id,
      experience.siteLink
    );

    document.getElementById(`${experience.id}CardContainer`).innerHTML =
      cardHtml;
    document.getElementById(`${experience.id}ModalContainer`).innerHTML =
      modalHtml;
  });
};

export default populateWorkExperience;
