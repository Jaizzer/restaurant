import { deleteCurrentContent } from "./deleteCurrentContent";
import { showSelection } from "./showSelection";
export function renderMenu() {

    // Access content.
    const content = document.querySelector("#content");
    deleteCurrentContent(content);

    // Create menu container.
    const menu = document.createElement("div");
    menu.classList.add("menu");
    content.appendChild(menu);

    // Create item selection container.
    const itemSelection = document.createElement('div');
    menu.classList.add("selection");

    // Render dish category buttons that shows corresponding selections when clicked.
    const foodCategories = ["Classic", "Dessert", "Drinks", "Ramen", "Rolls", "Sushi and Sashimi", "Salad"];
    foodCategories.forEach(foodCategory => {

        // Create button.
        let button = document.createElement("button");
        button.textContent = `${foodCategory}`;

        // Load correesponding dishes base on type/category when clicked.
        button.addEventListener("click", () => showSelection(`${foodCategory}`));

        // Append button to the container.
        menu.appendChild(button);
    })
}