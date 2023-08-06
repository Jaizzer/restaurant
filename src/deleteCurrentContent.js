// Delete currently loaded  content inside 'parent' div.
export function deleteCurrentContent(parent) {
   
    // Delete all content's children.
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}