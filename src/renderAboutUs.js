import { deleteCurrentContent } from "./deleteCurrentContent.js";
import { Card } from "./createCard.js";


export function renderAboutUs() {
    
    // Get content div.
    const content = document.querySelector("#content");

    // Delete previous content.
    deleteCurrentContent(content);

    // Array to store all cards.
    let cards = [];

    // Create "Our Story" section.
    let ourStory = new Card(
        "about-us-section",
        "./images/about/our-story.png",
        "Our Story",
        `Welcome to Jaizzer, an authentic Japanese culinary haven. Discover our journey from humble
         beginnings to becoming a revered destination for Japanese cuisine enthusiasts. Our commitment 
         to preserving tradition while embracing innovation defines our narrative.`,
        null
    );
    cards.push(ourStory);

    // Create "Crafting Culinary Magic" section.
    let culinaryMagic = new Card(
        "about-us-section",
        "./images/about/crafting-culinary-magic.png",
        "Crafting Culinary Magic",
        `Immerse yourself in the realm of Japanese flavors and techniques that grace our menu. Each 
         dish at Jaizzer is an artistic masterpiece, reflecting our dedication to excellence and a 
         harmonious blend of tastes.`,
        "Explore Our Menu"
    );
    cards.push(culinaryMagic);

    // Create "Meet the Team" section.
    let meetTheTeam = new Card(
        "about-us-section",
        "./images/about/meet-the-team.png",
        "Meet the Team",
        `Behind every remarkable dish at Jaizzer stands our team of passionate chefs. From our sushi 
         maestros to the creators of our comforting ramen, get to know the artisans who transform fresh 
         ingredients into culinary wonders.`,
        null
    );
    cards.push(meetTheTeam);

    // Create "Soulful Values, Sustainable Future" section.
    let valuesAndFuture = new Card(
        "about-us-section",
        "./images/about/values-and-future.png",
        "Soulful Values, Sustainable Future",
        `At Jaizzer, we believe that every plate tells a story. Our commitment to authenticity and 
         sustainability is reflected in every aspect of our operation. Join us in embracing a mindful 
         dining experience that respects both tradition and nature.`,
        null
    );
    cards.push(valuesAndFuture);

    // Create "Journey of Delight" section.
    let journeyOfDelight = new Card(
        "about-us-section",
        "./images/about/journey-of-delight.png",
        "Journey of Delight",
        `Over the years, Jaizzer has carved a path of culinary excellence. From accolades to cherished 
         moments, join us in celebrating the milestones that have shaped our identity and the memories 
         shared by our valued patrons.`,
        null
    );
    cards.push(journeyOfDelight);

    // Append all cards to the content div.
    cards.forEach((card) => {
        content.appendChild(card.create());
    });
}
