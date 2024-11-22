document.querySelectorAll("td button").forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.closest("tr");
    const grade = parseFloat(row.querySelector(".nota").textContent);
    if (grade >= 5) {
      row.classList.add("green");
    } else {
      row.classList.add("red");
    }
  });
});
