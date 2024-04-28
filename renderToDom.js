export const renderToDom = (divId, HTML) => {
  const selectedId = document.querySelector(divId);
  selectedId.innerHTML = HTML;
};
