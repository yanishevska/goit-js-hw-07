const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const newIngredients = document.querySelector('#ingredients')
const productEl = ingredients.map(option => {
    const newIngredientsList = document.createElement('li')
    newIngredientsList.textContent = option
    console.log(newIngredientsList)
    return newIngredientsList
})
newIngredients.append(...productEl);


