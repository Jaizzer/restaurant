# Jaizzer Restaurant Template
This repository provides a versatile template designed for mockup designs, with the potential for adaptation to actual implementation. If users intend to modify the template for actual implementation, it's important to note that this process will require extensive adjustments to javascript modules and stylesheets inside `src`, and various other components. The template, initially intended for mockup designs, offers the flexibility for adaptation to real-world usage.

This is my own generated website using the template: [Jaizzer Restaurant](https://jaizzer.github.io/jaizzer-restaurant/)


## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Card Class](#card-class)
  - [Modifying Cards](#modifying-cards)
    - [Modifying Cards in Homepage](#modifying-cards-in-homepage)
    - [Modifying Cards in About Us](#modifying-cards-in-about-us)
    - [Modifying Cards in Contact Us](#modifying-cards-in-contact-us)
    - [Modifying Gallery Page](#modifying-gallery-page)
    - [Modifying Menu Page](#modifying-menu-page)
    - [Updating Menu Page Food Category Buttons](#updating-menu-page-food-category-buttons)
  - [Naming Convention for Images](#naming-convention-for-images)
  - [Updating Image File Structure](#updating-image-file-structure)
  - [Updating HTML Title](#updating-html-title)
- [Previewing the Website](#previewing-the-website)
- [Contribution](#contributions)
- [Report Bugs](#report-bugs)
- [License](#license)


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- [Visual Studio Code](https://code.visualstudio.com/) (or any code editor of your choice) for development.

### Installation

1. Clone this repository to your local machine:

   `git clone https://github.com/Jaizzer/restaurant.git`

2. Navigate to the project directory:

   `cd jaizzer-restaurant`

3. Install the project dependencies:

   `npm install`

## Usage

### Card Class

The `Card` class is used to create card components throughout the website. It has the following properties:

- `Card(id, imagePath, heading, description, buttonCaption)`: Creates a new card instance.
- `id`: The ID of the card element.
- `imagePath`: The path to the card's image.
- `heading`: The main heading of the card.
- `description`: The card's description.
- `buttonCaption`: The caption for the button on the card.

<hr style="border: 0.5px solid #fff; margin-top: 10px; margin-bottom: 10px;">

### Modifying Cards

You can easily modify the content and appearance of cards on different sections of the website, such as the homepage, about us, and contact us pages. Here's how you can do it:

- Open the corresponding rendering file.
- To add a new card, create a new `Card` instance and add it to the `cards` array.
- To remove a card, locate the corresponding `Card` instance in the `cards` array and remove it.

See the instructions below for specific steps for editing cards in Homepage, About Us, Contact Us, Gallery Page, and Menu Page.

#### Modifying Cards in Homepage

1. Open the `renderHome.js` file located in the `src` directory.
2. Locate the section you want to modify, such as the hero section or food teaser sections.
3. Edit the properties of the `Card` instances to update the text, images, and button captions.

#### Modifying Cards in About Us

1. Open the `renderAboutUs.js` file located in the `src` directory.
2. Find the corresponding section you want to modify, such as "Our Story" or "Meet the Team."
3. Edit the properties of the `Card` instances to update the text and images.

#### Modifying Cards in Contact Us

1. Open the `renderContactUs.js` file located in the `src` directory.
2. Look for the `combinedCard` instance that represents the "Contact Us" section.
3. Edit the properties of the `Card` instance to update the contact information.

#### Modifying Gallery Page

Note that you do not need to modify the `renderGallery.js`. You only need to update the `images/gallery` directory to reflect the changes. By simply dropping all your images you want to appear in the "Gallery" page.

#### Modifying Menu Page

Just like modifying the Gallery page, you do not need to modify `renderMenu.js` for images, however you will need to only update it if you wish to change the `food category buttons` (see [Updating Menu Page Food Category Buttons](#updating-menu-page-food-category-buttons)). You only need to update the `images/menu` directory. However, read the naming conventions first and understand how modifying the file structure and renaming the directories will require additional work. Read [Naming Convention for Images](#naming-convention-for-images) and  [Updating Image File Structure](#updating-image-file-structure) below.

#### Updating Menu Page Food Category Buttons
To update the food category buttons, go to `renderMenu.js` and find:

```javascript
// Render dish category buttons that show corresponding selections when clicked.
const foodCategories = ["classics", "desserts", "drinks", "ramen", "rolls", "sushiAndSashimi", "salad"];
foodCategories.forEach(foodCategory => {

    // Create button.
    let button = document.createElement("button");
    // Add a special case for 'sushiAndSashimi'.
    button.textContent = (foodCategory === "sushiAndSashimi") ? "sushi and sashimi" : `${foodCategory}`;

    // Load corresponding dishes based on type/category when clicked.
    button.addEventListener("click", () => showSelection(`${foodCategory}`));

    // Append the button to the container.
    buttonContainer.appendChild(button);
});
```

Then modify `const foodCategories = ["classics", "desserts", "drinks", "ramen", "rolls", "sushiAndSashimi", "salad"];` base on the changes you like. Note that they should matched the directories you will use for the menu. Lastly see this:

```javascript
// Add special case for 'sushiAndSashimi'.
button.textContent = (foodCategory === "sushiAndSashimi") ? "sushi and sashimi" : `${foodCategory}`;
```

This code is just a way to make the button caption a spaced separated value.


<hr style="border: 0.5px solid #fff; margin-top: 10px; margin-bottom: 10px;">

### Naming Convention for Images in Menu

Open the `images` directory in `src` to see how the images are stored. Images for the menu follow the naming convention: `dishName_price.extension`. For example, `sushi_12.56.jpg` (using whitespaces in the dish name like `spicy sushi_12.56.jpg` would work).

### Updating Image File Structure

When you modify the image file structure, it's important to ensure that the `require.context` function inside the `handleImages.js` module is updated accordingly. The `require.context` function allows you to dynamically import multiple files from a directory based on a specified pattern. This is crucial for loading images dynamically in your application.

Here's how you can update the `require.context` calls:

1. Open the `handleImages.js` file: This file is responsible for handling the dynamic import of images based on the file structure.

2. Locate the `images` object: Inside the `handleImages.js` file, you'll find an `images` object that contains different properties representing different image categories or directories. Each property has a `require.context` function that specifies the directory path and a regular expression pattern to match the image files.

3. Update the directory path: If you modify the directory structure where your images are stored, you'll need to update the directory path in the `require.context` function. The first argument of the function is the directory path, and the second argument is the flag to indicate if subdirectories should be searched.

   For example, if you had images stored in `src/images/new-directory`, you would update the `require.context` function like this:

   ```javascript
   const newDirectoryImages = require.context('./images/new-directory', false, /\.(png|jpg|jpeg|gif)$/);

4. Add new properties for new directories: If you're adding new directories for images, you need to create new properties in the images object. Each property should have its own require.context function that corresponds to the location of the new directory.

   ```javascript
   const newDirectoryImages = require.context('./images/new-directory', false, /\.(png|jpg|jpeg|gif)$/);
   const images = {
       gallery: galleryImages,
       menu: menuImages,
       newDirectory: newDirectoryImages, // Add this line for the new directory
   };
By updating the require.context calls in the handleImages.js file, you ensure that your application can still dynamically import images from the correct directories, even if you've restructured or added new image directories.

Remember that the regular expression pattern in the require.context function specifies the file types to be matched (e.g., png, jpg, jpeg, gif). Make sure to include all the file extensions that your images use.

<hr style="border: 0.5px solid #fff; margin-top: 10px; margin-bottom: 10px;">

### Updating HTML Title
To Update HTML page title, just go to `index-template.html` located in `src` directory and find `<title>Restaurant</title>` and replace `Restaurant` with the new title.

<hr style="border: 0.5px solid #fff; margin-top: 10px; margin-bottom: 10px;">

## Previewing the Website

To preview the website in your browser:

1. Run the development server:

   `npm start`

2. Open your browser and navigate to [http://localhost:8080/](http://localhost:8080/).

Feel free to customize the content, images, and styles to match your restaurant's branding. If you have any questions or need further assistance, please don't hesitate to reach out. Enjoy creating your restaurant's website!

## Contributions
We welcome contributions to enhance and improve this template. If you have ideas or suggestions, feel free to create pull requests.

## Report Bugs
If you encounter any issues or bugs while using this template, please report them to us at florenzjaizzer.calderon@gmail.com.

## License
This template is available under the MIT License.
