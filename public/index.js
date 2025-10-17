let value = 100; 
let goal = 1000; 
let label = "На работу \"Искры\"";


let percentage = value / goal * 100;

if (percentage > 100) {
  percentage = 100;
}

document.addEventListener("DOMContentLoaded", () => {
  let inner = document.getElementById("progress-bar_inner");
  let labelElem = document.getElementById("progress-bar_label");
  let goalElem = document.getElementById("progress-bar_value");

  inner.style.width = percentage + "%";
  labelElem.textContent = label;
  goalElem.textContent = "€" + value + " / " + "€" + goal;
});

