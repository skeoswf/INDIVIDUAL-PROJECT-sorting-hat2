import { studentData } from "./data/studentData.js";
import { renderToDom } from "./utils/renderToDom.js";
import { card } from "./utils/cards.js";

const renderStudentCards = (studentData) => {
  let domString = "";

  studentData.forEach((student) => {
    domString += card(student);
  });

  renderToDom("#studentCards", domString);
};

renderStudentCards(studentData);
// id and html
