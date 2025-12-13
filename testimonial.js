let tIndex = 0;
rotateTestimonials();

function rotateTestimonials() {
  let testimonials = document.getElementsByClassName("testimonial-box");

  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }

  tIndex++;
  if (tIndex > testimonials.length) {
    tIndex = 1;
  }

  testimonials[tIndex - 1].style.display = "block";

  setTimeout(rotateTestimonials, 5000);
}
