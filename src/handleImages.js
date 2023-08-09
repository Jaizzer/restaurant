/**
 * Contains information (filename, dish name, dish price) about different images from different directories.
 * 
 * Each key in the this object corresponds to a specific directory, and the value associated with each key
 * is an array of objects containing information about the images in that directory.
 * 
 * The "images" object structure may look like this:
 * ```
 * {
 *    classics: [
 *      { fileName: "pizza_15.jpg", dishName: "pizza", dishPrice: "Unavailable" },
 *      { fileName: "burger_12.jpg", dishName: "burger", dishPrice: 12.56 },
 *    ], // And so on...
 * }
 * ```
 */
export const images = {
    
    classics: 
        require.context('./images/classics/', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendFileNameToPath('./images/classics', contextPath))
        .map(extractImageDetails),

    desserts: 
        require.context('./images/desserts/', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendFileNameToPath('./images/desserts', contextPath))
        .map(extractImageDetails),

    drinks: 
        require.context('./images/drinks/', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendFileNameToPath('./images/drinks', contextPath))
        .map(extractImageDetails),

    ramen: 
        require.context('./images/ramen/', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendFileNameToPath('./images/ramen', contextPath))
        .map(extractImageDetails),

    rolls: 
        require.context('./images/rolls/', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendFileNameToPath('./images/rolls', contextPath))
        .map(extractImageDetails),

    sushiAndSashimi: 
        require.context('./images/sushi-and-sashimi/', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendFileNameToPath('./images/sushi-and-sashimi', contextPath))
        .map(extractImageDetails),

    salad: 
        require.context('./images/salad/', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendFileNameToPath('./images/salad', contextPath))
        .map(extractImageDetails),
};


/**
 * Appends a file name to a given path.
 * 
 * @param {string} path - The base path.
 * @param {string} fileName - The file name to be appended.
 * @returns {string} The concatenated path with the file name.
 * 
 * @example
 * const basePath = '/images/';
 * const fileName = 'image.jpg';
 * const fullPath = appendFileNameToPath(basePath, fileName);
 * console.log(fullPath); // Output: '/images/image.jpg'
 */
function appendFileNameToPath(path, contextPath) {
    return path + contextPath;
}


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
    let dishPrice;

    // If price was not properly formatted in the image name set it to "Unavailable"
    if ( (splittedImageName.length === 1) || ( (`${parseFloat(splittedImageName[1])}`).length !== splittedImageName[1].length) ) {
        dishPrice = "Unavailable";
    }
    // If price was properly formatted convert price from string to float.
    else {
        dishPrice = parseFloat(splittedImageName[1]);
    }

    // Return an object containing the extracted information.
    return { path, dishName, dishPrice };
}