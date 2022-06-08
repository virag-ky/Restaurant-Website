const createMenuSection = () => {
  const menuSection = document.createElement("section");
  menuSection.classList.add("hide");
  menuSection.setAttribute("id", "menu-section");
  menuSection.innerHTML = `<h2>Menu</h2>
  <div id="selection">
  <select>
    <option value="0">Vegan</option>
    <option value="1">Pasta</option>
    <option value="2">Seafood</option>
    <option value="3">Chicken</option>
    <option value="4">Breakfast</option>
  </select>
</div>
  `;

  fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  document.getElementById("content").appendChild(menuSection);
};

export default createMenuSection;
