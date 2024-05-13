const btns = document.querySelectorAll(".quiz .question .answers button");
for (const btn of btns) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const answers = e.target.closest(".answers");
        const answer = answers.getAttribute("data-answer");

        const targetChoiceEl = e.target.closest("li");
        const targetChoice = targetChoiceEl.getAttribute("data-choice");

        for (const choiceEl of answers.querySelectorAll(".choice")) {
            choiceEl.classList.remove("correct");
            choiceEl.classList.remove("incorrect");
        }

        if (targetChoice === answer) {
            targetChoiceEl.classList.add("correct");
        } else {
            targetChoiceEl.classList.add("incorrect");
        }
    });
}

// function replaceButtonX() {
//     var image = document.createElement("img");
//     image.src = "X.png"; 
//     image.alt = "Wrong!"; 
//     document.getElementById("wrong").replaceWith(image);
// }

// function replaceButtonCheck() {
//     var image = document.createElement("img");
//     image.src = "Check.png"; 
//     image.alt = "Correct!"; 
//     document.getElementById("correct").replaceWith(image);
// }

// document.getElementById("wrong").addEventListener("click", replaceButtonX);
// document.getElementById("correct").addEventListener("click", replaceButtonCheck);