document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".nav-menu > li");
  
    menuItems.forEach((item) => {
      item.addEventListener("mouseover", function (event) {
        const submenu = event.currentTarget.querySelector(".submenu");
        if (submenu) {
          submenu.classList.add("submenu-open");
        }
      });
  
      item.addEventListener("mouseout", function (event) {
        const submenu = event.currentTarget.querySelector(".submenu");
        if (submenu) {
          submenu.classList.remove("submenu-open");
        }
      });
    });
  });
  