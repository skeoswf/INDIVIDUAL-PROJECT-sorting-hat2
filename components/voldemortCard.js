export const voldemortCard = (student) => {
  return `
  <div class="card voldemortCard" style="width: 16rem;">
    <div class="card-body voldemortHouse">
      <h5 class="card-title">${student.name.toUpperCase()}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${student.house}</h6>
      <p class="card-text">
        ${student.description}
      </p>
      <button class="voldemortCardButton" id="delete--${student.id}">
        CONDEMN
      </button>
    </div>
  </div>;
  `;
};
