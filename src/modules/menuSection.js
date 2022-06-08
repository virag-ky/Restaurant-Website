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
</div>
  `;
  document.getElementById("content").appendChild(menuSection);

  const selection = document.querySelector("select");
  selection.addEventListener("change", (e) => {
    switch (e.target.value) {
      case "vegan":
        category = "Vegan";
        getMenu(category);
        break;
      case "pasta":
        category = "Pasta";
        getMenu(category);
        break;
      case "seafood":
        category = "Seafood";
        getMenu(category);
        break;
      case "chicken":
        category = "Chicken";
        getMenu(category);
        break;
      case "breakfast":
        category = "Breakfast";
        getMenu(category);
        break;
      default:
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
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { createMenuSection, getMenu };
