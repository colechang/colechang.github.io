const nav = document.querySelector("nav");
const contactSection = document.querySelector(".last-section");

const contactSectionOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const contactSectionObserver = new IntersectionObserver(function(
  entries,
  contactSectionObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
},
contactSectionOptions);

contactSectionObserver.observe(contactSection);



