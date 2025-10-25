// Current progress values
let value = 2537 + 12 + 5; 

// Goal value
let goal = 8000;

// Label for the progress bar
// let label = "На работу «Искры»";
let label = "Гере на восстановление режима сна";
// let label = "На освобождение Полины из подвала";
// let label = "";

// Calculate percentage (don't touch this part)
let percentage = value / goal * 100;
if (percentage > 100) {
  percentage = 100;
}

// Change widget elements after page load
document.addEventListener("DOMContentLoaded", () => {
  let inner = document.getElementById("progress-bar_inner");
  let labelElem = document.getElementById("progress-bar_label");
  let goalElem = document.getElementById("progress-bar_value");

  inner.style.width = percentage + "%";
  labelElem.textContent = label;
  goalElem.textContent = "€" + value + " / " + "€" + goal;
});

