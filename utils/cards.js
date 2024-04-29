export const card = (student) => {
  return `
  <div class="card" id="${student.id} style="width: 16rem;">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${student.house}</h6>
      <p class="card-text">
        ${student.description}
      </p>
      <button>
        update description
      </button>
      <button>
        expel
      </button>
    </div>
  </div>;
  `;
};
