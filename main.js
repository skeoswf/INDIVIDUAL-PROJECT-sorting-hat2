import { studentData } from "./data/studentData.js";
import { voldemortData } from "./data/voldemortData.js";

import { card } from "./components/cards.js";
import { voldemortCard } from "./components/voldemortCard.js";

import { randomHouseGenerator } from "./utils/randomHouse.js";
import { renderToDom } from "./utils/renderToDom.js";

const enterButton = document.querySelector("#enter");

const gryffindorButton = document.querySelector("#gryffindorFilter");
const slytherinButton = document.querySelector("#slytherinFilter");
const noFilterButton = document.querySelector("#noFilter");
const ravenclawButton = document.querySelector("#ravenclawFilter");
const hufflepuffButton = document.querySelector("#hufflepuffFilter");

const studentCardWrapper = document.querySelector("#studentCards");
const voldemortCardWrapper = document.querySelector("#voldemortCards");
const form = document.querySelector("form");

let filterValue = 0;

const renderCards = (studentData) => {
  let domString = "";
  let voldemortDomString = "";

  studentData.forEach((student) => {
    domString += card(student);
  });

  voldemortData.forEach((expelled) => {
    voldemortDomString += voldemortCard(expelled);
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
      voldemortDomString += voldemortCard(expelled);
    }
  });
  filterValue = 1;
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
      voldemortDomString += voldemortCard(expelled);
    }
  });
  filterValue = 2;
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
    voldemortDomString += voldemortCard(expelled);
  });
  filterValue = 0;
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
      voldemortDomString += voldemortCard(expelled);
    }
  });
  filterValue = 3;
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
      voldemortDomString += voldemortCard(expelled);
    }
  });
  filterValue = 4;
  renderToDom("#studentCards", domString);
  renderToDom("#voldemortCards", voldemortDomString);
};

const createNewStudent = (e) => {
  e.preventDefault();

  const newStudentObj = {
    id: studentData.length + 1,
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    house: randomHouseGenerator(),
  };

  studentData.push(newStudentObj);

  switch (filterValue) {
    case 0:
      noFilter();
      break;
    case 1:
      gryffindorFilter();
      break;
    case 2:
      slytherinFilter();
      break;
    case 3:
      ravenclawFilter();
      break;
    case 4:
      hufflepuffFilter();
    default:
      console.log("what happened");
  }

  form.reset();
};

studentCardWrapper.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = studentData.findIndex((student) => student.id === Number(id));
    const nowExpelled = studentData.splice(index, 1)[0];
    voldemortData.push(nowExpelled);

    switch (filterValue) {
      case 0:
        noFilter();
        break;
      case 1:
        gryffindorFilter();
        break;
      case 2:
        slytherinFilter();
        break;
      case 3:
        ravenclawFilter();
        break;
      case 4:
        hufflepuffFilter();
      default:
        console.log("what happened");
    }
  }
});

voldemortCardWrapper.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = voldemortData.findIndex(
      (expelled) => expelled.id === Number(id)
    );
    voldemortData.splice(index, 1);

    switch (filterValue) {
      case 0:
        noFilter();
        break;
      case 1:
        gryffindorFilter();
        break;
      case 2:
        slytherinFilter();
        break;
      case 3:
        ravenclawFilter();
        break;
      case 4:
        hufflepuffFilter();
      default:
        console.log("what happened");
    }
  }
});

renderCards(studentData);

gryffindorButton.addEventListener("click", gryffindorFilter);
slytherinButton.addEventListener("click", slytherinFilter);
noFilterButton.addEventListener("click", noFilter);
ravenclawButton.addEventListener("click", ravenclawFilter);
hufflepuffButton.addEventListener("click", hufflepuffFilter);

form.addEventListener("submit", createNewStudent);

enterButton.addEventListener("click", () => {
  document.getElementById("titleCard").hidden = true;
  document.getElementById("app").hidden = false;
});
