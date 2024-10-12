// Smooth Scroll for Sidebar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Animation Trigger on Scroll for Portfolio Section
window.addEventListener('scroll', function() {
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
          item.style.animation = 'zoomIn 1s ease forwards';
      }
  });
});

const text = "I'm Ramya Muniganti...";
const container = document.getElementById("text-container");
let index = 0;

function typeLetter() {
  if (index < text.length) {
    container.textContent += text.charAt(index); // Add one letter at a time
    index++;
    setTimeout(typeLetter, 300); // Adjust speed (milliseconds)
  } else {
    // Stop the page for a certain time after typing is complete
    setTimeout(() => {
      // You can add additional code here if needed after the text appears
      console.log("Finished typing."); // This can be replaced or removed
    }, 2000); // Time to wait after finishing typing (milliseconds)
  }
}

// Start typing effect
typeLetter();


