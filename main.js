// Toggling Skill Tabs

      const tabs = document.querySelectorAll("[data-target]");
      const tabContent = document.querySelectorAll("[data-content]");

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const target = document.querySelector(tab.dataset.target);

          tabContent.forEach((tabContents) => {
            tabContents.classList.remove("skills-active");
          });

          target.classList.add("skills-active");

          tabs.forEach((tab) => {
            tab.classList.remove("skills-active");
          });

          tab.classList.add("skills-active");
        });
      });

      function togglePortfolioPopup() {
        document.querySelector(".portfolio-popup").classList.toggle("open");
      }

      document
        .querySelector(".portfolio-popup-close")
        .addEventListener("click", togglePortfolioPopup);

      function portfolioItemDetails(portfolioItem) {
        document.querySelector(".pp-thumbnail img").src =
          portfolioItem.querySelector(".work-img").src;
        document.querySelector(".portfolio-popup-subtitle span").innerHTML =
          portfolioItem.querySelector(".work-title").innerHTML;
        document.querySelector(".portfolio-popup-body").innerHTML =
          portfolioItem.querySelector(".portfolio-item-details").innerHTML;
      }

      

      //Swiper Testimonial

      let swiper = new Swiper(".testimonials-container", {
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        },
      });

      // Input Animation

      const inputs = document.querySelectorAll(".input");

      function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
      }

      function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
          parent.classList.remove("focus");
        }
      }

      inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
      });

      // Scroll Section Active Link

      const sections = document.querySelectorAll("section[id]");

      window.addEventListener("scroll", navHighlighter);

      function navHighlighter() {
        let scrollY = window.pageYOffset;
        sections.forEach((current) => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;
          const sectionId = current.getAttribute("id");

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
              .querySelector(".nav-menu a[href*=" + sectionId + "]")
              .classList.add("active-link");
          } else {
            document
              .querySelector(".nav-menu a[href*=" + sectionId + "]")
              .classList.remove("active-link");
          }
        });
      }

      // Activating Sidebar

      const navMenu = document.getElementById("sidebar");
      const navToggle = document.getElementById("nav-toggle");
      const navClose = document.getElementById("nav-close");

      if (navToggle) {
        navToggle.addEventListener("click", () => {
          navMenu.classList.add("show-sidebar");
        });
      }

      if (navClose) {
        navClose.addEventListener("click", () => {
          navMenu.classList.remove("show-sidebar");
        });
      }