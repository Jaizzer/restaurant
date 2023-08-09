import { deleteCurrentContent } from "./deleteCurrentContent.js";
import { Card } from "./createCard.js";

// Render Home Contents.
export function renderHome() {

    // Get content div.
    const content = document.querySelector("#content");

    // Delete previous content.
    deleteCurrentContent(content);

    // Array to store all cards.
    let cards = []

    // Create hero section.
    let heroSection = new Card(
        "hero-section",
        "./images/home/hero-0.png",
        "Welcome to Jaizzer",
        "Experience the essence of Japan at Jaizzer, where we serve authentic Japanese cuisine crafted with love and passion.",
        "Explore Our Menu"
    );
    cards.push(heroSection);

    // Create food teaser section (tease some of the best dishes). 
    let sushiTeaser = new Card(
        "food-teaser",
        "./images/home/sushi-0.png",
        "Exquisite Sushi Delights",
        "Indulge in the freshest and most delectable sushi dishes prepared by our skilled sushi chefs.",
        "See Our Sushi Selection"
    );
    cards.push(sushiTeaser);

    // Create kitchen section (show how food is well prepared). 
    let kitchenSection = new Card(
        "kitchen-section",
        "./images/home/kitchen-0.png",
        "Masterfully Prepared",
        "Our kitchen is where culinary artistry comes to life. Our expert chefs bring out the best flavors in each dish.",
        "Meet Our Chefs"
    );
    cards.push(kitchenSection);

    // Create food teaser section (tease some of the best dishes). 
    let ramenTeaser = new Card(
        "food-teaser",
        "./images/home/ramen-0.png",
        "Hearty Ramen Selection",
        "Savor the rich flavors and comforting warmth of our authentic Japanese ramen bowls.",
        "Discover Our Ramen"
    );
    cards.push(ramenTeaser);

    // Create dining section (show how great the ambiance or feel of the actual place). 
    let diningSection = new Card(
        "dining-section",
        "./images/home/dining-0.png",
        "A Cozy Dining Experience",
        "Immerse yourself in a cozy and inviting ambiance as you enjoy your culinary journey at Jaizzer.",
        "Reserve a Table"
    );
    cards.push(diningSection);

    // Create food teaser section (tease some of the best dishes). 
    let tempuraTeaser = new Card(
        "food-teaser",
        "./images/home/tempura-0.png",
        "Tempura Delicacies",
        "Treat yourself to the delightful crispiness of our traditional Japanese tempura dishes.",
        "Explore Our Tempura Selection"
    );
    cards.push(tempuraTeaser);

    // Append all cards to the content div.
    cards.forEach((card) => {
        content.appendChild(card.create());
    });
}