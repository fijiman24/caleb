import colourPalettes from "./colourPalettes.js";

const welcomeMessages = [
  {
    message: `       
 ██████╗ █████╗ ██╗     ███████╗██████╗ ██╗   ██╗███████╗██████╗ ███╗   ███╗ █████╗     ██████╗ ██████╗ ███╗   ███╗
██╔════╝██╔══██╗██║     ██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗████╗ ████║██╔══██╗   ██╔════╝██╔═══██╗████╗ ████║
██║     ███████║██║     █████╗  ██████╔╝██║   ██║█████╗  ██████╔╝██╔████╔██║███████║   ██║     ██║   ██║██╔████╔██║
██║     ██╔══██║██║     ██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══██║   ██║     ██║   ██║██║╚██╔╝██║
╚██████╗██║  ██║███████╗███████╗██████╔╝ ╚████╔╝ ███████╗██║  ██║██║ ╚═╝ ██║██║  ██║██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║
 ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝
    `,
    colorPalette: colourPalettes.orange,
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
    colorPalette: colourPalettes.green,
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
    colorPalette: colourPalettes.blue,
  },
];

let i = 0;

const changeWelcomeMessage = () => {
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

export default changeWelcomeMessage;
