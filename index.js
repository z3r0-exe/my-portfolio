document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
  
    function updateActiveLink() {
      let activeIndex = 0;
      const scrollY = window.scrollY + 100; 
  
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sections[i].offsetTop - 200) { 
          activeIndex = i;
          break;
        }
      }
  
      navLinks.forEach(link => {
        link.classList.remove("active");
      });
  
      navLinks[activeIndex].classList.add("active");
    }
  
    updateActiveLink();
  
  
    window.addEventListener("scroll", updateActiveLink);
  
   
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80, // Adjust for fixed header height
            behavior: "smooth"
          });
        }
      });
    });
  });