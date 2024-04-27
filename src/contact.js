import yt_logo from "./assests/img/yt.webp"

function getContact(){
        // Create div element with class "contactText"
    const contact = document.createElement("div");
    contact.classList.add("contact");
    const contactTextDiv = document.createElement("div");
    contactTextDiv.classList.add("contactText");

    // Create div element with class "text"
    const textDiv = document.createElement("div");
    textDiv.classList.add("text");
    textDiv.textContent = "YOU CAN FIND US ON OUR YOUTUBE CHANNEL";

    // Create div element with class "channelLink"
    const channelLinkDiv = document.createElement("div");
    channelLinkDiv.classList.add("channelLink");

    // Create img element
    const ytImage = new Image()
    ytImage.src = yt_logo
    ytImage.alt = "YouTube Logo";

    // Create anchor element
    const ytLink = document.createElement("a");
    ytLink.href = "https://www.youtube.com/@IndianKitchen-fe7gk";
    ytLink.textContent = "INDIAN KITCHEN ASMA";

    // Append img element and anchor element to "channelLink" div
    channelLinkDiv.appendChild(ytImage);
    channelLinkDiv.appendChild(ytLink);

    // Append "text" and "channelLink" divs to "contactText" div
    contactTextDiv.appendChild(textDiv);
    contactTextDiv.appendChild(channelLinkDiv);

    contact.appendChild(contactTextDiv)

    return contact

}

export default getContact