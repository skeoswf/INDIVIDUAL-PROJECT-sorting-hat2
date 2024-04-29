export const randomHouseGenerator = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  switch (randomNumber) {
    case 0:
      return "gryffindor";
      break;
    case 1:
      return "slytherin";
      break;
    case 2:
      return "ravenclaw";
      break;
    case 3:
      return "hufflepuff";
      break;
    default:
      console.log("what happened");
  }
};
