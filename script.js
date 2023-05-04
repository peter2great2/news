let iconMenu = document.getElementById("icon-menu");
let icon = true;

const changeIcon = () => {
  if (icon === true) {
    iconMenu.setAttribute("src", "/assets/images/icon-menu-close.svg");
    icon = false;
    console.log(icon);
  } else {
    iconMenu.setAttribute("src", "/assets/images/icon-menu.svg");
    icon = true;
    console.log(icon);
  }
};

iconMenu.addEventListener("click", changeIcon);
