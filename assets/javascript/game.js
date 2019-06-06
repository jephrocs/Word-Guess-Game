var words = ["coke", "sprite", "pepsi", "Fanta"];
var randomWord = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = randomWord.length;
while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    var guess = prompt("Guess a letter");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Enter a letter plz");
    } else {
        for (var j = 0; j < randomWord.length; j++) {
            if (randomWord[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;

            }
        }
    }
}
alert(answerArray.join(" "));
alert("Nice work. The answer was " + randomWord);