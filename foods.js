const loadFoods = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(rest => rest.json())
    .then(data=> displayFood(data.meals))
}

const displayFood = foods =>{
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = '';
    foods.forEach(food => {
        //console.log(food)
       const foodDiv = document.createElement('div');
       foodDiv.classList.add('col');
       foodDiv.innerHTML=`
       <div onclick="loadFoodDetail(${food.idMeal})" class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${food.strMeal}</h5>
                  <p class="card-text">${food.strInstructions.slice(0,200)}</p>
                </div>
       
       `;
       foodContainer.appendChild(foodDiv);
    });


}

const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadFoods(searchText);
    searchField.value ='';
}

const loadFoodDetail= (idMeal) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res=> res.json())
    .then(data => displayFoodDetail(data.meals[0]))
console.log('hey', idMeal, url )
}

const displayFoodDetail = food =>{
const detailContainer = document.getElementById('detail-container');
detailContainer.innerHTML='';
const detailDiv = document.createElement('div')
detailDiv.classList.add('card');
detailDiv.innerHTML=`
<img src="${food.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${food.strMeal}</h5>
  <p class="card-text">${food.strInstructions}</p>
</div>

`;
detailContainer.appendChild(detailDiv);

}
loadFoods('');