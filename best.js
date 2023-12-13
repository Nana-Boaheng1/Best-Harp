// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form Validation
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      // Add your validation logic here
      if (!validateForm()) {
        event.preventDefault();
      }
    });
  
    function validateForm() {
      // Add your form validation logic
      return true; // Return false if validation fails
    }
  });
  
  // Modal or Popup
  document.addEventListener('DOMContentLoaded', function () {
    const modalBtn = document.getElementById('openModal');
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementById('closeModal');
  
    modalBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  // Toggle Navigation Menu on Small Screens
  document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.querySelector('nav');
  
    menuBtn.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  });
  