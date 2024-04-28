import { studentData } from "./data/studentData.js";
import { voldemortData } from "./data/voldemortData.js";
import { renderToDom } from "./utils/renderToDom.js";
import { card } from "./utils/cards.js";

const renderCards = (studentData) => {
  let domString = "";
  let voldemortDomString = "";

  studentData.forEach((student) => {
    domString += card(student);
  });

  voldemortData.forEach((expelled) => {
    voldemortDomString += card(expelled);
  });

  renderToDom("#studentCards", domString);
  renderToDom("#voldemortCards", voldemortDomString);
};

renderCards(studentData);
// id and html
