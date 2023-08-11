import { deleteCurrentContent } from "./deleteCurrentContent.js";
import { Card } from "./createCard.js";

export function renderContactUs() {

    // Get content div.
    const content = document.querySelector("#content");

    // Delete previous content.
    deleteCurrentContent(content);

    // Create a single card to combine all sections.
    let combinedCard = new Card(
        "contact-us",
        null,
        "Contact Us",
        `
        <p>
            We'd love to hear from you. Whether you have a question, feedback, or just want to say hello,
            our team is ready to assist you. Reach out to us through the contact details below.
        </p>
        <p>
            Email: info@jaizzer.com <br><br> 
            Phone: +1 (123) 456-7890 <br><br> 
            Address: 123 Sushi Street, Tokyo, Japan
        </p>
        `,
        null
    );

    // Append the combined card to the content div.
    content.appendChild(combinedCard.create());
}
