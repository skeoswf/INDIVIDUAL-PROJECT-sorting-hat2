import { studentData } from "./data/studentData.js";
import { voldemortData } from "./data/voldemortData.js";
import { renderToDom } from "./utils/renderToDom.js";
import { card } from "./utils/cards.js";

const gryffindorButton = document.querySelector("#gryffindorFilter");
const slytherinButton = document.querySelector("#slytherinFilter");
const noFilterButton = document.querySelector("#noFilter");
const ravenclawButton = document.querySelector("#ravenclawFilter");
const hufflepuffButton = document.querySelector("#hufflepuffFilter");

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

const gryffindorFilter = () => {
  let domString = "";
  let voldemortDomString = "";

  studentData.forEach((student) => {
    if (student.house === "gryffindor") {
      domString += card(student);
    }
  });

  voldemortData.forEach((expelled) => {
    if (expelled.house === "gryffindor") {
      voldemortDomString += card(expelled);
    }
  });
  renderToDom("#studentCards", domString);
  renderToDom("#voldemortCards", voldemortDomString);
};

const slytherinFilter = () => {
  let domString = "";
  let voldemortDomString = "";

  studentData.forEach((student) => {
    if (student.house === "slytherin") {
      domString += card(student);
    }
  });

  voldemortData.forEach((expelled) => {
    if (expelled.house === "slytherin") {
      voldemortDomString += card(expelled);
    }
  });
  renderToDom("#studentCards", domString);
  renderToDom("#voldemortCards", voldemortDomString);
};

const noFilter = () => {
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

const ravenclawFilter = () => {
  let domString = "";
  let voldemortDomString = "";

  studentData.forEach((student) => {
    if (student.house === "ravenclaw") {
      domString += card(student);
    }
  });

  voldemortData.forEach((expelled) => {
    if (expelled.house === "ravenclaw") {
      voldemortDomString += card(expelled);
    }
  });
  renderToDom("#studentCards", domString);
  renderToDom("#voldemortCards", voldemortDomString);
};

const hufflepuffFilter = () => {
  let domString = "";
  let voldemortDomString = "";

  studentData.forEach((student) => {
    if (student.house === "hufflepuff") {
      domString += card(student);
    }
  });

  voldemortData.forEach((expelled) => {
    if (expelled.house === "hufflepuff") {
      voldemortDomString += card(expelled);
    }
  });
  renderToDom("#studentCards", domString);
  renderToDom("#voldemortCards", voldemortDomString);
};

renderCards(studentData);

gryffindorButton.addEventListener("click", gryffindorFilter);
slytherinButton.addEventListener("click", slytherinFilter);
noFilterButton.addEventListener("click", noFilter);
ravenclawButton.addEventListener("click", ravenclawFilter);
hufflepuffButton.addEventListener("click", hufflepuffFilter);
