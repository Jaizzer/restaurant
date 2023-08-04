import { deleteCurrentContent } from "./deleteCurrentContent";

// Render Home Contents.
export function renderHome() {

    // Delete previous content.
    deleteCurrentContent();

    // Get content div.
    const content = document.querySelector("#content");
}