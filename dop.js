alert("Привет, я хочу поиграть с тобой.");
alert("Тебе нужно угадать цифру от 1 до 100");
alert("Начнем?");
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
function gameNumber() {
  let gamerNum = prompt("Введите число!");
  if (!isNaN(gamerNum)) {
    gamerNum = +gamerNum;

    if (!gamerNum) {
      alert("Игра окончена.");
      return false;
    } else if (gamerNum < randomNumber) {
      alert("Загаданное число больше.");
    } else if (gamerNum === randomNumber) {
      alert("Поздравляю, Вы угадали!!!");
      return gamerNum;
    } else if (gamerNum > randomNumber) {
      alert("Загаданное число меньше.");
    }
  }

  return gameNumber();
}

console.log(gameNumber());
