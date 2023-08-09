/**
 * Contains information (filename, dish name, dish price) about different images from various directories.
 * 
 * Each key in this object corresponds to a specific directory, and the value associated with each key
 * is an array of objects containing information about the images in that directory.
 * 
 * The structure of the "images" object is as follows:
 * ```
 * {
 *    classics: [
 *      { path: "./images/classics/pizza_15.jpg", dishName: "pizza", dishPrice: "Unavailable" },
 *      { path: "./images/classics/burger_12.jpg", dishName: "burger", dishPrice: 12.56 },
 *    ], // And so on...
 * }
 * ```
 */
export const images = {
    // Fetch image details for the "classics" directory.
    classics: 
        require.context('./images/menu/classics', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/classics', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "desserts" directory.
    desserts: 
        require.context('./images/menu/desserts', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/desserts', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "drinks" directory.
    drinks: 
        require.context('./images/menu/drinks', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/drinks', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "ramen" directory.
    ramen: 
        require.context('./images/menu/ramen', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/ramen', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "rolls" directory.
    rolls: 
        require.context('./images/menu/rolls', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/rolls', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "sushi-and-sashimi" directory.
    sushiAndSashimi: 
        require.context('./images/menu/sushi-and-sashimi', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/sushi-and-sashimi', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "salad" directory.
    salad: 
        require.context('./images/menu/salad', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/salad', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "gallery" directory.
    gallery: 
        require.context('./images/gallery', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendContextPathToMainPath('./images/gallery', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "hero" directory.
    hero: 
        require.context('./images/hero', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendContextPathToMainPath('./images/hero', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "about" directory.
    about: 
        require.context('./images/about', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendContextPathToMainPath('./images/about', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "contact" directory.
    contact: 
        require.context('./images/contact', true, /\.(jpg|png|svg|jpeg|gif)$/).keys()
        .map(contextPath => appendContextPathToMainPath('./images/contact', contextPath))
        .map(extractImageDetails),
};


/**
 * Appends a file name to a given path.
 * 
 * @param {string} mainPath - The base path.
 * @param {string} contextPath - The file name to be appended.
 * @returns {string} The concatenated path with the file name.
 * 
 * @example
 * const mainPath = './images/classics';
 * const contextPath = 'image.jpg';
 * const fullPath = appendFileNameToPath(mainPath, contextPath);
 * console.log(fullPath); // Output: './images/classics/image.jpg'
 */
function appendContextPathToMainPath(mainPath, contextPath) {
    return mainPath + contextPath.slice(1); // Remove dot from context path before combining with mainPath.
}


/**
 * Extracts dish name, dish price, and path from the image path.
 * 
 * @param {string} path - The full path of the image file.
 * @returns {Object} An object containing the extracted information: { path, dishName, dishPrice }.
 */
function extractImageDetails(path) {

    // Extract image file name from 'path'.
    const fileName = path.split("/").pop();

    // Extract image name from the 'path'.
    const noExtensionFileName = fileName.split('.')[0];

    // Split image name into an array containing name and price.
    const splittedImageName = noExtensionFileName.split('_');
    
    // Store dish price and name in individual variables.
    const dishName = splittedImageName[0];
    let dishPrice;

    // If price was not properly formatted in the image name, set it to "Unavailable".
    if ( splittedImageName.length === 1 || (`${parseFloat(splittedImageName[1])}`).length !== splittedImageName[1].length) {
        dishPrice = "Unavailable";
    }
    // If price was properly formatted convert price from string to float.
    else {
        dishPrice = parseFloat(splittedImageName[1]);
    }

    // Return an object containing the extracted information.
    return { path, dishName, dishPrice };
}