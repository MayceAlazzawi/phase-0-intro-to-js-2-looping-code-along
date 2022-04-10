// Code your solutions in this file
const gifts = ['bear', 'drone', 'doll']

function wrapGifts(gift) {
  for (let i = 0; i < gift.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow`)
    debugger;
  }
  return gifts;
}
wrapGifts(gifts)


function writeCards(arr, eventname) {
  for (i = 0; i < arr.length; i++) {
    console.log(`"Thank you, ${arr[i]}, for the wonderful ${eventname} gift!",`)
  }
}
writeCards(['mayce', 'murt', 'tofi'], 'birthday')

function countdown(num) {
  while (num > 0) {
    console.log(num--);
  }
}
console.log(countdown(20))

