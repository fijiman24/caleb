import populateProjects from "./projects.js";
import changeWelcomeMessage from "./welcomeMessages.js";

// Change welcome message text and color palette
document.getElementById("website-name").onclick = function myFunction() {
  changeWelcomeMessage();
};

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
  populateProjects();
});
