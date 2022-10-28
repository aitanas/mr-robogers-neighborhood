
function beepBoop(number) {
  let array = [];
  for (let i = 0; i <= number; i++) {
    array.push(i);
    if (array[i] === 1) {
      let oneIndex = array.indexOf(1);
      array.splice(oneIndex, 1, "Beep!")
    } else if (array[i] === 2) {
      let twoIndex = array.indexOf(2);
      array.splice(twoIndex, 1, "Boop!")
    } else if (array[i] === 3) {
      let threeIndex = array.indexOf(3);
      array.splice(threeIndex, 1, "Won't you be my neighbor?")
    }
  }
  return array;
}

// Hierarchy of Substitutions
// neighbor (3) > boop (2) > beep (1)