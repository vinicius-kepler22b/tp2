document.querySelectorAll(".accordion-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".accordion-item p").forEach((p) => {
      if (p !== item.querySelector("p")) {
        p.classList.add("hidden");
      }
    });
    item.querySelector("p").classList.toggle("hidden");
  });
});
