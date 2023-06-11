document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const shuffleButton = document.getElementById("shuffleButton");
  const changeButton = document.getElementById("changeButton");
  const showButton = document.getElementById("showButton");

  shuffleButton.addEventListener("click", shuffleValues);
  changeButton.addEventListener("click", openChangeValuesDialog);
  showButton.addEventListener("click", showSelectedValues);

  function shuffleValues() {
    const checkboxesContainer = Array.from(
      form.querySelectorAll(".form-group")
    );
    const checkboxes = checkboxesContainer.map((container) =>
      container.querySelector('input[type="checkbox"]')
    );

    checkboxes.sort(() => 0.5 - Math.random());

    checkboxesContainer.forEach((container, index) => {
      container.appendChild(checkboxes[index].parentNode);
    });
  }

  function openChangeValuesDialog() {
    const checkboxesContainer = Array.from(
      form.querySelectorAll(".form-group")
    );
    const checkboxes = checkboxesContainer.map((container) =>
      container.querySelector('input[type="checkbox"]')
    );

    checkboxes.forEach((checkbox, index) => {
      const newValue = prompt("Enter a new value for " + checkbox.value);
      if (newValue) {
        checkboxes[index].value = newValue;
        checkboxes[index].nextSibling.textContent = newValue;
      }
    });
  }

  function showSelectedValues() {
    const checkboxes = Array.from(form.elements["interest"]);
    const selectedValues = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    document.getElementById("output").textContent =
      "Selected Values: " + selectedValues.join(", ");
  }
});
