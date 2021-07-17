const numberOfCategories = document.querySelectorAll('.item');

console.log(`У списку ${numberOfCategories.length} категорії.`);

const nameCategories = document.querySelectorAll(`h2`);

nameCategories.forEach(el => {
    console.log(`Категорія: ${el.textContent}
    Кількість елементів: ${el.parentNode.querySelectorAll(`li`).length}`)

});