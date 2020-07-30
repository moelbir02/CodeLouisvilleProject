

// humberger menu 
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;

}



//function for confirming and validating form.  

function confirmSubmit() {
  var invalidFields =[];
  var requiredFields = document.querySelectorAll(".required");

  requiredFields.forEach(field => {
      if (field.value === '') {
        invalidFields.push(field.name)
      }
    });

    if (invalidFields.length > 0) {
      alert(`Please fill out the form. There are required fields left.`);
      console.log("no data entered");
      return false;
    } else {
      var userChoice = confirm("Are you sure you want to submit?");
      if (userChoice === false) {
      alert("No Data Submitted");
      console.log("user pressed cancel");
      event.preventDefault(); 
      } else {
        alert("Submission Successful!");
        console.log("user pressed submit");
        return true;
      };
    };
}





