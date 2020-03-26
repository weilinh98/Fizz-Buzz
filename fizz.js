$(document).ready(initializeApp);

function initializeApp() {
  $(".start-button").click(() => {
    $(".start-button").hide();
    startFizzBuzz();
    display();
  });
}

const result = [];
let count = 0;

function startFizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      result.push("Fizz Buzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      result.push("Fizz");
    } else if (i % 3 !== 0 && i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
}

function display() {
  setInterval(() => {
    const text = $("<p></p>").text(result[count]);
    $(".display").append(text);
    count++;
    if (count === 99) {
      clearInterval(display);
    }
  }, 1000);
}
