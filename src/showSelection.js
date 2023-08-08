import { deleteCurrentContent } from "./deleteCurrentContent.js";
import { images } from "./handleMenuImages.js";
import { Card } from "./createCard.js";

/**
 * Loads new cards containing dishes of the specified food "type" inside "selection" div.
 * 
 * Example: showSelection("ramen") will replace currently loaded dishes with ramen dishes in "selection" div.
 * 
 * @param {("classics"|"desserts"|"drinks"|"ramen"|"rolls"|"sushiAndSashimi"|"salad")} type - The type of food to be rendered. Must be one of the specified strings.
 */
export function showSelection(type) {

    // Delete current contents of "selection" container.
    const selection = document.querySelector(".selection");
    deleteCurrentContent(selection);
    
    // Create and append the cards containing dishes corresponding to "type".
    images[`${type}`].forEach(element => {
        let dish = new Card("menu-item", element.fileName, element.dishName, element.dishPrice, null);
        selection.appendChild(dish.create());
    });
}

