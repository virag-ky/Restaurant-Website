let category;

const createMenuSection = () => {
  const menuSection = document.createElement("section");
  menuSection.classList.add("hide");
  menuSection.setAttribute("id", "menu-section");
  menuSection.innerHTML = `<h2>Menu</h2>
  <div id="selection">
  <select>
    <option value="vegan">Vegan</option>
    <option value="pasta">Pasta</option>
    <option value="seafood">Seafood</option>
    <option value="chicken">Chicken</option>
    <option value="breakfast">Breakfast</option>
  </select>
  <div id="menu-items"></div>
</div>
  `;
  document.getElementById("content").appendChild(menuSection);
  const menuItemsContainer = document.getElementById("menu-items");

  const selection = document.querySelector("select");
  selection.addEventListener("change", (e) => {
    switch (e.target.value) {
      case "vegan":
        menuItemsContainer.innerHTML = "";
        category = "Vegan";
        getMenu(category);
        break;
      case "pasta":
        menuItemsContainer.innerHTML = "";
        category = "Pasta";
        getMenu(category);
        break;
      case "seafood":
        menuItemsContainer.innerHTML = "";
        category = "Seafood";
        getMenu(category);
        break;
      case "chicken":
        menuItemsContainer.innerHTML = "";
        category = "Chicken";
        getMenu(category);
        break;
      case "breakfast":
        menuItemsContainer.innerHTML = "";
        category = "Breakfast";
        getMenu(category);
        break;
      default:
        menuItemsContainer.innerHTML = "";
        category = "Vegan";
        getMenu(category);
        break;
    }
  });
};

const getMenu = (category) => {
  fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((res) => res.json())
    .then((data) => {
      data.meals.length > 8
        ? (data.meals = data.meals.splice(0, 8))
        : data.meals;

      const menuItemsContainer = document.getElementById("menu-items");

      data.meals.forEach((item) => {
        const meal = document.createElement("div");
        meal.classList.add("meals");
        meal.innerHTML = `<h2 class="meal-name">${item.strMeal}</h2>
          <div class="rating">
          <a href="#5" title="Give 5 stars">★</a>
          <a href="#4" title="Give 4 stars">★</a>
          <a href="#3" title="Give 3 stars">★</a>
          <a href="#2" title="Give 2 stars">★</a>
          <a href="#1" title="Give 1 star">★</a>
          </div>
          <div class="blur-div"></div>
        `;
        meal.style.background = `url(${item.strMealThumb})`;
        meal.style.backgroundPosition = "center";
        meal.style.backgroundSize = "cover";
        menuItemsContainer.appendChild(meal);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export { createMenuSection, getMenu };
