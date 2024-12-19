document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("#pl1 input"); // Поле для ввода ключевого слова
    const categorySelect = document.querySelector("#categories"); // Выпадающий список категорий
    const challenges = document.querySelectorAll("#challenges .chall"); // Все элементы челленджей

    function filterChallenges() {
        const searchTerm = searchInput.value.toLowerCase().trim(); // Текущий ввод пользователя
        const selectedCategory = categorySelect.value; 
        challenges.forEach(challenge => {
            const name = challenge.querySelector(".name").textContent.toLowerCase(); // Название челленджа
            const category = challenge.querySelector(".ch").textContent.trim().toLowerCase(); // Категория челленджа
            const description = challenge.querySelector(".desc").textContent.toLowerCase();
            const matchesCategory = selectedCategory ? 
                (category === mapCategory(selectedCategory)) : true;
            const matchesSearch = searchTerm
                ? name.includes(searchTerm) || description.includes(searchTerm)
                : true;
            if (matchesCategory && matchesSearch) {
                challenge.style.display = "block";
            } else {
                challenge.style.display = "none";
            }
        });
    }

    function mapCategory(value) {
        const categoryMap = {
            health: "здоровье",
            fitness: "образование",
            productivity: "технологии",
            hobby: "хобби"
        };
        return categoryMap[value] || "";
    }
    searchInput.addEventListener("input", filterChallenges);
    categorySelect.addEventListener("change", filterChallenges);
});
