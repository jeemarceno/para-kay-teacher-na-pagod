function openLetter() {
    const letter = document.getElementById("letter");
    const question = document.getElementById("question");
    const button = document.querySelector("button");

    letter.style.display = "block";
    question.style.display = "block";
    button.style.display = "none";

    letter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}