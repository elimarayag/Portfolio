function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

    let currentIndex = 0;
    const images = document.querySelectorAll('#image-slider img');

    function showNextImage() {
      images[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = 'block';
      setTimeout(showNextImage, 1000); 
    }

    showNextImage();