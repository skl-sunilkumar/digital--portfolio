document.addEventListener("DOMContentLoaded", function() {
    const profilePicture = document.querySelector(".profile-picture");
    profilePicture.addEventListener("mouseover", function() {
        profilePicture.style.transform = "scale(1.2)";
        profilePicture.style.transition = "transform 0.3s ease-in-out";
    });
     profilePicture.addEventListener("mouseout", function() {
        profilePicture.style.transform = "scale(1)";
    });
    const sections = document.querySelectorAll("section");
    const headerContent = document.querySelector(".header-content");
   headerContent.addEventListener("click", function() {
        window.scrollTo({
            top: sections[0].offsetTop,
            behavior: "smooth"
        });
    });
    sections.forEach((section) => {
        section.addEventListener("mouseenter", function() {
            section.style.backgroundColor = "#d7ebf4";
        });

        section.addEventListener("mouseleave", function() {
            section.style.backgroundColor = "white";
        });
    });
    const downloadButton = document.querySelector(".download-button");
    downloadButton.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Your CV is being downloaded!");
    });
});