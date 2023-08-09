import { deleteCurrentContent } from "./deleteCurrentContent.js";
import { Card } from "./createCard.js";


export function renderContactUs() {
    
    // Get content div.
    const content = document.querySelector("#content");

    // Delete previous content.
    deleteCurrentContent(content);

    // Array to store all cards.
    let cards = [];

    // Create "Get in Touch" section.
    let getInTouch = new Card(
        "contact-us-section",
        null,
        "Get in Touch",
        `We'd love to hear from you. Whether you have a question, feedback, or just want to say hello,
        our team is ready to assist you. Reach out to us through the contact details below.`,
        null
    );
    cards.push(getInTouch);

    // Create "Contact Information" section.
    let contactInfo = new Card(
        "contact-us-section",
        null,
        "Contact Information",
        "Email: info@jaizzer.com <br> Phone: +1 (123) 456-7890 <br> Address: 123 Sushi Street, Tokyo, Japan",
        null
    );
    cards.push(contactInfo);

    // Create "Visit Us" section.
    let visitUs = new Card(
        "contact-us-section",
        null,
        "Visit Us",
        `Come and experience the culinary journey at Jaizzer. We're conveniently located in the heart of
         Tokyo. Reserve a table and treat yourself to an unforgettable dining adventure.`,
        "Reserve a Table"
    );
    cards.push(visitUs);

    // Append all cards to the content div.
    cards.forEach((card) => {
        content.appendChild(card.create());
    });
}
