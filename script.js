function toggleSection(button) {
    var sectionId = button.getAttribute('data-target');
    var section = document.getElementById(sectionId);
    var icon = button.querySelector('.icon');

    // Get the computed style of the section
    var sectionStyle = window.getComputedStyle(section);

    // Toggle the visibility of the section
    if (sectionStyle.display === 'none') {
        section.style.display = 'block';
        icon.innerHTML = '&#9660;'; // Change icon to downward-pointing arrow
    } else {
        section.style.display = 'none';
        icon.innerHTML = '&#9658;'; // Change icon back to right-pointing arrow
    }
}
let slideIndex = 0;
const slides = document.getElementsByClassName("slideshow-images")[0].getElementsByTagName("img");
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex].style.display = "block";  
}

document.addEventListener("DOMContentLoaded", function() {
    // Adjust top positions of each div
    document.getElementById('div1').style.top = '9px';
    document.getElementById('div2').style.top = '25cm';
    document.getElementById('div3').style.top = '30cm';
});