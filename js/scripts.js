
function beepBoop(number) {
  let array = [];
  for (let i = 0; i <= number; i++) {
    array.push(i);
  }
  const stringArray = array.map(String);
  array.forEach(function () {
    if ((stringArray[i][0] === 1) || (stringArray[i][1] ===1)) {
      let index = array.indexOf(array[i]);
      array.splice(index, 1, "Beep!")
    } else if (array[i] === 2) {
      let twoIndex = array.indexOf(2);
      array.splice(twoIndex, 1, "Boop!")
    } else if (array[i] === 3) {
      let threeIndex = array.indexOf(3);
      array.splice(threeIndex, 1, "Won't you be my neighbor?")
    }
  });
  return stringArray;
  }

function oneToBeep(number) {
  const array = beepBoop(number);
  const stringArray = array.map(String);
  for (i = 0; i <= stringArray.length; i++) {
    if ((stringArray[i][0] === 1) || (stringArray[i][1] ===1)) {
      let index = array.indexOf(array[i]);
      array.splice(index, 1, "Beep!")
    }
  }
  return stringArray;
}

// testing in dev console
let stringArray = ['10','11','12','13'];
for (let i = 0; i <= stringArray.length; i++) {
  if (stringArray[i][i] === '1') {
    let index = stringArray.indexOf(stringArray[i]);
    stringArray.splice(index, 1, "Beep!");
    console.log(stringArray);
  } else if (stringArray[i] === '2') {
    let twoIndex = stringArray.indexOf(2);
    stringArray.splice(twoIndex, 1, "Boop!");
  } else if (stringArray[i] === '3') {
    let threeIndex = stringArray.indexOf(3);
    stringArray.splice(threeIndex, 1, "Won't you be my neighbor?");
  }
};
console.log(stringArray);

// Hierarchy of Substitutions
// neighbor (3) > boop (2) > beep (1)