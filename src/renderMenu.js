import { deleteCurrentContent } from "./deleteCurrentContent.js";
import { showSelection } from "./showSelection.js";
export function renderMenu() {

    // Access content.
    const content = document.querySelector("#content");
    deleteCurrentContent(content);

    // Create menu container.
    const menu = document.createElement("div");
    menu.classList.add("menu");
    content.appendChild(menu);

    // Create food category buttons container.
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("category");
    menu.appendChild(buttonContainer);

    // Create item selection container.
    const itemSelection = document.createElement('div');
    itemSelection.classList.add("selection");
    menu.appendChild(itemSelection);

    // Render dish category buttons that shows corresponding selections when clicked.
    const foodCategories = ["classics", "desserts", "drinks", "ramen", "rolls", "sushiAndSashimi", "salad"];
    foodCategories.forEach(foodCategory => {

        // Create button.
        let button = document.createElement("button");
        // Add special case for 'sushiAndSashimi'.
        button.textContent = (foodCategory === "sushiAndSashimi") ? "sushi and sashimi" : `${foodCategory}`;

        // Load correesponding dishes base on type/category when clicked.
        button.addEventListener("click", () => showSelection(`${foodCategory}`));

        // Append button to the container.
        buttonContainer.appendChild(button);
    })
}