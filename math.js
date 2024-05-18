let num1, num2, startTime, numDigits;

function generateRandomNumber(digits) {
    const lowerBound = Math.pow(10, digits - 1);
    const upperBound = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
}

function startPractice() {
    numDigits = parseInt(document.getElementById('digits').value);
    if (numDigits < 2) {
        alert('Please enter a number greater than or equal to 2.');
        return;
    }

    document.getElementById('digitSelection').classList.add('hidden');
    document.getElementById('problem').classList.remove('hidden');
    nextProblem();
}

function nextProblem() {
    num1 = generateRandomNumber(numDigits);
    num2 = generateRandomNumber(numDigits);

    document.getElementById('question').innerText = `Add the following numbers: ${num1} + ${num2}`;
    document.getElementById('result').classList.add('hidden');
    document.getElementById('answer').value = '';
    document.getElementById('answer').focus();

    startTime = new Date();
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = num1 + num2;
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;

    const resultMessage = userAnswer === correctAnswer
        ? `Correct! It took you ${timeTaken.toFixed(2)} seconds.`
        : `Incorrect. The correct answer is ${correctAnswer}. It took you ${timeTaken.toFixed(2)} seconds.`;

    document.getElementById('resultMessage').innerText = resultMessage;
    document.getElementById('result').classList.remove('hidden');
    
    setTimeout(nextProblem, 2000);  // Automatically move to the next problem after 2 seconds
}

function quitPractice() {
    document.getElementById('digitSelection').classList.remove('hidden');
    document.getElementById('problem').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
}
