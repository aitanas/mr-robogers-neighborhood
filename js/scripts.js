// Business logic

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
      if ((stringArray[i][0] === '3') || (stringArray[i][1] === '3') || (stringArray[i][2] === '3')) {
        let index3 = stringArray.indexOf(stringArray[i]);
        stringArray.splice(index3, 1, "Won't you be my neighbor?");
      } else if ((stringArray[i][0] === '2') || (stringArray[i][1] === '2') || (stringArray[i][2] === '2')) {
        let index2 = stringArray.indexOf(stringArray[i]);
        stringArray.splice(index2, 1, "Boop!");
      } else if ((stringArray[i][0] === '1') || (stringArray[i][1] === '1') || (stringArray[i][2] === '1')) {
        let index1 = stringArray.indexOf(stringArray[i]);
        stringArray.splice(index1, 1, "Beep!"); } 
    } return stringArray;
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
}

function removeResult (event) {
  event.preventDefault();

  const h3 = document.querySelector("h3");
  const pElement = document.querySelector("p");

  h3.remove();
  pElement.remove();
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", getResult);

  let resetBtn = document.querySelector("button#reset");
  resetBtn.addEventListener("click", removeResult);
})