const hamburgerIcon = document.querySelector(".hamburger-icon-wrapper");
const hamburgerContent = document.querySelector(".hamburger-content");
const hamburgerSectionCloseButton = document.querySelector(".close-button");

const handleHamburgerIconClick = () => {
  hamburgerContent.classList.remove("hidden");
};

const hamburgerSectionCloseButtonClick = () => {
  hamburgerContent.classList.add("hidden");
};

hamburgerIcon.addEventListener("click", handleHamburgerIconClick);

hamburgerSectionCloseButton.addEventListener(
  "click",
  hamburgerSectionCloseButtonClick
);
