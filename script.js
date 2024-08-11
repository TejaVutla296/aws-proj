function calculateScore() {
    const correctAnswers = {
        q1: "c",
        q2: "c",
        q3: "b",
        q4: "b",
        q5: "c",
        q6: "a",
        q7: "a",
        q8: "a",
        q9: "b",
        q10: "b"
    };

    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer) {
            if (userAnswer.value === correctAnswers[`q${i}`]) {
                score += 4;
            } else {
                score -= 1;
            }
        }
    }

    document.getElementById("result").innerText = `Your score is: ${score}`;
    document.getElementById("resetButton").style.display = "block";
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("result").innerText = "";
    document.getElementById("resetButton").style.display = "none";
}
