import { deleteCurrentContent } from "./deleteCurrentContent.js";
import { images } from "./handleImages.js";
import { Card } from "./createCard.js";

/**
 * Render gallery images.
 */
export function renderGallery() {

    // Delete current contents of "selection" container.
    const content = document.querySelector("#content");
    deleteCurrentContent(content);

    const gallery = document.createElement("div");
    gallery.classList.add("gallery-container")
    content.appendChild(gallery)
    
    // Create and append the cards containing dishes corresponding to "type".
    images["gallery"].forEach(element => {
        let dish = new Card("gallery-item", element.path, null, null, null);
        gallery.appendChild(dish.create());
    });
}

