document.addEventListener("DOMContentLoaded", () => {
    const challenges = document.querySelectorAll("#challenges .chall");
    const generateButton = document.getElementById("generateButton");

    generateButton.addEventListener("click", () => {
        challenges.forEach(challenge => challenge.style.display = "none");
        const randomIndex = Math.floor(Math.random() * challenges.length);
        challenges[randomIndex].style.display = "block";
    });
});
