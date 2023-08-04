// Delete currently loaded  content.
export function deleteCurrentContent() {
    // Get 'content' element.
    const content = document.querySelector("#content");

    // Delete all content's children.
    while (content.firstChild) {
        content.firstChild.remove();
    }
}