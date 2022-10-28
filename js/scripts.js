
function beepBoop(number) {
  let array = [];
  for (let i = 0; i <= number; i++) {
    array.push(i);
  }
  const stringArray = array.map(String);
  for (let i = 0; i <= stringArray.length; i++) {
    let lastElement = stringArray.length -1;
    if (lastElement.length = 2) {
      if ((stringArray[i][0] === '1') || (stringArray[i][1] === '1')) {
        let index = stringArray.indexOf(stringArray[i]);
        stringArray.splice(index, 1, "Beep!");
        console.log(stringArray);
      }
    }
  }
}

//   if (stringArray[i] === '1') {
//     let index = stringArray.indexOf(stringArray[i]);
//     stringArray.splice(index, 1, "Beep!");
//     console.log(stringArray);
//   } else if (stringArray[i] === '2') {
//     let twoIndex = stringArray.indexOf(2);
//     stringArray.splice(twoIndex, 1, "Boop!");
//   } else if (stringArray[i] === '3') {
//     let threeIndex = stringArray.indexOf(3);
//     stringArray.splice(threeIndex, 1, "Won't you be my neighbor?");
//   }
// };

// Hierarchy of Substitutions
// neighbor (3) > boop (2) > beep (1)