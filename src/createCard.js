
export class Card {

    // Card contents
    constructor(cardClass, imagePath, heading, description , buttonCaption) {
        this.class = cardClass;
        this.imagePath = imagePath;
        this.heading = heading;
        this.description = description;
        this.buttonCaption = buttonCaption;
    }

    // Create card method based on card contents.
    create() {

        // Create main container.
        const card = document.createElement("div");
        card.classList.add("card");

        // Add optional card class if user provided.
        if (this.cardClass !== null) {
            card.classList.add(`${this.cardClass}`);
        }

        // Create card image inside 'card'
        if (this.imagePath !== null) {
            const imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");
            card.appendChild(imageContainer);

            const image = new Image();
            image.src = this.imagePath;
            imageContainer.appendChild(image);
        }
        
        // Create card-copy section inside 'card'.
        const copy = document.createElement("div");
        copy.classList.add("copy");
        card.appendChild(copy);

        // Create the heading inside 'card-copy'.
        if (this.heading !== null) {
            const heading = document.createElement("div");
            heading.classList.add("heading");
            heading.textContent = `${this.heading}`;
            copy.appendChild(heading);
        }

        // Create the subheading inside 'copy'.
        if (this.description !== null) {
            const description = document.createElement("div");
            description.classList.add("description");
            description.textContent = `${this.description}`;
            copy.appendChild(description);
        }

        // Create call to action button inside copy section.
        if (this.buttonCaption !== null){
            const button = document.createElement("button");
            button.classList.add("call-to-action");
            button.textContent = `${this.buttonCaption}`;
            copy.appendChild(button);
        }

        // Return card.
        return card;
    }
}
