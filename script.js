function checkAnswers() {
    let score = 0;
    const answers = {
        q1: "Paris",
        q2: "Albert Einstein"
    };

    const form = document.getElementById("quizForm");

    for (let question in answers) {
        let selectedOption = form.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === answers[question]) {
            score++;
        }
    }

    const result = document.getElementById("result");
    result.innerHTML = `You scored ${score} out of 2!`;
}
