/* eslint-disable no-unused-expressions */
/* eslint-disable no-tabs */
/* eslint-disable indent */

const replaceYouTubeUrl = (url) => {
  return url.replace("watch?v=", "embed/");
};

const createFoodDetailTemplate = (food) => `
<div class='foodContainer'>
<img class="food__poster" src="${food.strMealThumb}" alt="${food.strMeal}" />
<div>
  <h2 class="food__title">${food.strMeal}</h2>
  <div class="food__info">
    <p>${food.strCategory} - ${
  food.strTags ? food.strTags : "Tag not available"
}</p>
  </div>
  <div class="food__overview">
    <h3>Instructions</h3>
    <p>${food.strInstructions}</p>
  </div>
  <div class="food_receipt">
    <h3>Ingredients</h3>
    <ul>
      ${generateIngredientList(food)}
    </ul>
  </div>
</div>
</div>
<div class="video__container">
<h3>Tutorial</h3>
<div class='video'>
<iframe width="560" height="315" src=${replaceYouTubeUrl(
  food.strYoutube
)} frameborder="0" allowfullscreen></iframe>  
</div>
</div>

`;

const generateIngredientList = (food) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = food[`strIngredient${i}`];
    const measure = food[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`<li>${measure} ${ingredient}</li>`);
    }
  }

  return ingredients.join("");
};

const createCategoryTemplate = (category) => `
  <div class="category-item">
    <div class="category-item__header">
        <img class="category-item__header__poster" alt="${category.title}"
            src="${category.strCategoryThumb}">
    </div>
    <div class="category-item__content">
        <h3><a href="${`/#/food/${category.strCategory}`}">${
  category.strCategory
}</a></h3>
    </div>
  </div>
  `;

const createFoodTemplate = (food) => `
  <div class="category-item">
    <div class="category-item__header">
        <img class="category-item__header__poster" alt="${food.strMeal}"
            src="${food.strMealThumb}">
    </div>
    <div class="category-item__content">
        <h3><a href="${`/#/detail/${food.idMeal}`}">${food.strMeal}</a></h3>
    </div>
  </div>
  `;

export { createCategoryTemplate, createFoodDetailTemplate, createFoodTemplate };
