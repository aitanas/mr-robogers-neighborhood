
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
    }
  }
  return array;
}