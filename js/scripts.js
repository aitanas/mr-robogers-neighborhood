// Business logic

// Hierarchy of Substitutions
// neighbor (3) > boop (2) > beep (1)

function createArray(number) {
  let array = [];
  for (let i = 0; i <= number; i++) {
    array.push(i);
  }
  return array;
}

function beepBoop(number) {
  let array = [];
  for (let i = 0; i <= number; i++) {
    array.push(i);
  }
  const stringArray = array.map(String);
  for (let i = 0; i < stringArray.length; i++) {
    let lastElement = stringArray.length -1;
    if (lastElement.length = 2) {
      if ((stringArray[i][0] === '3') || (stringArray[i][1] === '3')) {
        let index3 = stringArray.indexOf(stringArray[i]);
        stringArray.splice(index3, 1, "Won't you be my neighbor?");
      } else if ((stringArray[i][0] === '2') || (stringArray[i][1] === '2')) {
        let index2 = stringArray.indexOf(stringArray[i]);
        stringArray.splice(index2, 1, "Boop!");
      } else if ((stringArray[i][0] === '1') || (stringArray[i][1] === '1')) {
        let index1 = stringArray.indexOf(stringArray[i]);
        stringArray.splice(index1, 1, "Beep!");
      }
    }
  } return stringArray;
}

// UI logic
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", getResult);
}); 

function getResult(event) {
  event.preventDefault();

  const numInput = document.getElementById("numInput").value;
  const h1 = document.createElement("h1");
  const pElement = document.createElement("p");
  const result = beepBoop(numInput);

  h1.append("Results:");
  document.body.append(h1);
  pElement.append("Your result is:" + result +".");
  document.body.append(pElement);
}