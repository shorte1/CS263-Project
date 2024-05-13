function NoIdea() {
  location.href = "NoIdea.html";
}
function SomeIdea() {
  location.href = "SomeIdea.html"
}
function ProfessionalIdea() {
  location.href = "ProfessionalIdea.html"
}
function goToQuiz() {
  location.href = "quiz.html"
}

function replaceButtonX() {
  var image = document.createElement("img");
  image.source = "X.png"; 
  image.alt = "Wrong!"; 
  document.getElementById("wrong").replaceWith(image);
}

function replaceButtonCheck() {
  var image = document.createElement("img");
  image.source = "check.png"; 
  image.alt = "Wrong!"; 
  document.getElementById("correct").replaceWith(image);
}

document.getElementById("correct").addEventListener("click", replaceButtonCheck);

document.getElementById("wrong").addEventListener("click", replaceButtonX);
