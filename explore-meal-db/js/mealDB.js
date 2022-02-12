const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = "";

   const url = `
   https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
   `;

   fetch(url)
    .then(response => response.json())
    .then(data => displaySearchResult(data.meals));   
}

// display section start

const displaySearchResult = meals =>{
  const displayCard = document.getElementById("display-card");
  displayCard.textContent = "";


  meals.map((meal) => {
    const card = document.createElement('div');
    card.classList.add('col')
    card.innerHTML = `
    <div onclick = "loadMealDetail()"; class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title fs-2">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <a href="${meal.strSource}" target="_blank" class="btn btn-primary">Source</a>
      <a href="${meal.strYoutube}" target="_blank" class="btn btn-primary">Youtube</a>
    </div>
  </div>
    `
    displayCard.appendChild(card)
  });
}

const loadMealDetail = (mealId) => {
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
fetch(url)
  .then(response => response.json())
  .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
console.log(displayMealDetail);
}
