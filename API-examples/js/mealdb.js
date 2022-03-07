const searchFood = () => {
const searchField = document.getElementById('search-field');
const searchText = searchField.value;
searchField.value = '';
const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
fetch(url)
.then(response => response.json())
.then(data => displaySearchResult (data.meals))
};


const displaySearchResult = (meals) => {
  console.log(meals);
const searchResult = document.getElementById('search-result');
searchResult.innerHTML = '';

meals.map(meal => {
const mealDiv = document.createElement('div');
mealDiv.classList.add('col');
mealDiv.innerHTML = `
<div class="col">
<div onclick = "loadMealDetail( ${meal.idMeal})" class="card h-100">
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
  </div>
</div>
</div>
`;

searchResult.appendChild(mealDiv);

})
};


const loadMealDetail = (mealId) => {
 const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
  .then(response => response.json())
  .then(data => displayMealDetail (data.meals[0]))
}


const displayMealDetail = meal =>{
  console.log(meal);
}

