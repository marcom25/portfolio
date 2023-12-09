import { v4 as uuidv4 } from "uuid";
import { BOOTSTRAP, DJANGO, EXPRESSJS, HTML, JAVA, JS, MYSQL, NODE, CSS, REACT, SASS } from "../../utils/svgImports"
import panaderia from "../../assets/images/panaderia.jpg"
import furever from "../../assets/images/furever.jpg"

//placeholder images

const API =
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20240%22%20preserveAspectRatio%3D%22none%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%20%20%20%20%20%20%20%20%20%20%23holder%20text%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%20%20%23ff6fff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20400%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Cg%20id%3D%22holder%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%234b0082%20%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctext%20text-anchor%3D%22middle%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20dy%3D%22.3em%22%3E%7BAPI%7D%3C%2Ftext%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fsvg%3E";
const battleship =
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20240%22%20preserveAspectRatio%3D%22none%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%20%20%20%20%20%20%20%20%20%20%23holder%20text%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%20%20%23ff6fff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20400%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Cg%20id%3D%22holder%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%234b0082%20%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctext%20text-anchor%3D%22middle%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20dy%3D%22.3em%22%3E%7Bbattleship%7D%3C%2Ftext%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fsvg%3E";




export const projects = [
  {
    id: uuidv4(),
    name: "FurEver",
    description: "WebApp that seeks to speed up and simplify the adoption of pets based on applications specialized in creating connections, such as Tinder.",
    img: furever,
    alt: "image of FurEver page",
    builtWith: [REACT, SASS, BOOTSTRAP],
    repoLink: "https://github.com/marcom25/furever",

  },
  {
    id: uuidv4(),
    name: "FurEver API",
    description: "API for FurEver, it allows to create complex relationships between users and pets",
    img: API,
    alt: "placeholder img with the word (API) in curly brackets",
    builtWith: [DJANGO, BOOTSTRAP],
    repoLink: "https://github.com/PolRivarola/FurEver_API",    
  },
  {
    id: uuidv4(),
    name: "Bakery Shop",
    description:
      "It's an e-commerce like WebApp, it allows users to register and search for products by filtering them, also it allows the users to add the products to a cart.",
    img: panaderia,
    alt: "image of the landing page of the bakery shop project",
    builtWith: [JS, HTML, CSS, REACT, BOOTSTRAP],  
    repoLink: "https://github.com/marcom25/panaderia-proyect",
    pageLink: "https://panaderia-proyect.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Bakery Shop API",
    description:
      "it's an API that manages the users and the products of the bakery shop project",
    img: API,
    alt: "placeholder img with the word (API) in curly brackets",
    builtWith: [JS, NODE, EXPRESSJS, MYSQL],
    repoLink: "https://github.com/marcom25/panaderia-api",
  },
  {
    id: uuidv4(),
    name: "Battleship",
    description: "Console app that simulates a simplified version of the Battleship game",
    img: battleship,
    alt: "placeholder img with the word (battleship) in curly brackets",
    builtWith: [JAVA],
    repoLink: "https://github.com/marcom25/batalla-naval-1.0",
  },
];
