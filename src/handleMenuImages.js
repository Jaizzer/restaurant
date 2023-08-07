/**
 * Parse name of dish, price, and path from the 'path'.
 * Example: /dir1/dir2/images_10.png ====> { fileName: "images_10.png", dishName: "images", dishPrice: "10" }
 * 
 * @param {string} path - The full path of the image file.
 * @returns {Object} An object containing the extracted information: { fileName, dishName, dishPrice }.
 */
function extractImageDetails(path) {

    // Extract image file name from 'path'.
    const fileName = path.split("/").pop()

    // Extract image name from the 'path'.
    const noExtensionFileName = fileName.split('.')[0];

    // Split image name into array containing name and price.
    const splittedImageName = noExtensionFileName.split('_');

    // Store dish price and name in individual variable.
    const dishName = splittedImageName[0];
    const dishPrice = splittedImageName[1];

    // Return an object containing the extracted information.
    return { fileName, dishName, dishPrice };
}