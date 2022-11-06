// Business logic

function beepBoop(number) {
  let array = [];
  for (let i = 0; i <= number; i++) {
    let numString = String(i);
    if (/3/.test(numString)) {
      array.push("Won't you be my neighbor?");
    } else if (/2/.test(numString)) {
      array.push("Boop!");
    } else if (/1/.test(numString)) {
      array.push("Beep!");
    } else {
      array.push(i);
    }
    } return array;
  }

// UI logic

function getResult(event) {
  event.preventDefault();

  const numInput = document.getElementById("numInput").value;
  const h3 = document.createElement("h3");
  const pElement = document.createElement("p");
  const result = beepBoop(numInput);
  const body = document.body;

  h3.append("Mr. Roboger says:");
  body.append(h3);
  pElement.append(result.join(", "));
  body.append(pElement);

  document.getElementById("submit").disabled = true;
}

function removeResult (event) {
  event.preventDefault();

  const h3 = document.querySelector("h3");
  const pElement = document.querySelector("p");

  h3.remove();
  pElement.remove();
  document.getElementById("submit").disabled = false;
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", getResult);

  let resetBtn = document.querySelector("button#reset");
  resetBtn.addEventListener("click", removeResult);
})