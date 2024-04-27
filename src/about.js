import chef_img from "./assests/img/chef_2.jpg"

function getAbout(){
    // Create div element with class "aboutText"
    const aboutTextDiv = document.createElement("div");
    aboutTextDiv.classList.add("aboutText");

    // Create div element with class "aboutImage"
    const aboutImageDiv = document.createElement("div");
    aboutImageDiv.classList.add("aboutImage");

    // Create img element
    const chefImage = new Image();
    chefImage.src = chef_img;
    // Append img element to "aboutImage" div
    aboutImageDiv.appendChild(chefImage);

    // Create div element with class "aboutInfo"
    const aboutInfoDiv = document.createElement("div");
    aboutInfoDiv.classList.add("aboutInfo");

    // Set text content for "aboutInfo" div
    aboutInfoDiv.textContent = "Indian Kitchen Asma is one of the best place to learn cooking taught by our MasterChef Asma itself, She is one of the greatest chef alive who not only can cook amazing dishes but also teach it very easily anyone with her amazing pedagogy,as you know not every great artist is a great teacher but our MasterChef Asma is not only a great cook but also a amazing teacher , so start learning now!";

    // Append "aboutImage" and "aboutInfo" divs to "aboutText" div
    aboutTextDiv.appendChild(aboutImageDiv);
    aboutTextDiv.appendChild(aboutInfoDiv);

    return aboutTextDiv;
}

export default getAbout

