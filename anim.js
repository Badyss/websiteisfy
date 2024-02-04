
function ouvrirmenu() {
        var entrer = document.getElementById('entrer');
        var fermer = document.getElementById('fermer');
        var menu = document.getElementById('dropdown');

        if (fermer.style.display == 'block') {
            menu.style.display = 'none';
            fermer.style.display = 'none';
            entrer.style.display = 'block';
        } else {
            menu.style.display = 'block';
            fermer.style.display = 'block';
            entrer.style.display = 'none';
        }
}

document.addEventListener("scroll", function() {
  var agenceDiv = document.querySelector(".agence");
  var membreDivs = document.querySelectorAll(".membre");
  var agencePosition = agenceDiv.getBoundingClientRect();

  if (agencePosition.top < window.innerHeight) {
    membreDivs.forEach(function(membreDiv) {
      membreDiv.classList.add("appear");
    });
  }}
);


function develop() {
  const questionTitles = document.querySelectorAll('.question h2');
  questionTitles.forEach(questionTitle => {
    questionTitle.addEventListener('click', () => {
      const answer = questionTitle.nextElementSibling;
      const question = questionTitle.parentElement;

      if (answer.classList.contains('visible')) {
        answer.classList.remove('visible');
        answer.style.display = 'none';
        questionTitle.style.backgroundColor = 'rgb(3, 111, 219)';
        questionTitle.style.color = 'white';
        question.style.boxShadow = 'none';
      } else {
        answer.classList.add('visible');
        answer.style.display = 'block';
        questionTitle.style.backgroundColor = 'rgb(3, 111, 219)';
        questionTitle.style.color = 'black';
        question.style.boxShadow = '0 0 8px rgba(3, 111, 219, 0.7)';
      }
    });
  });
}

function agrandirImage() {
  var projets = document.querySelector(".projets");
  var images = projets.querySelectorAll("img");

  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
      var overlay = document.createElement("div");
      overlay.className = "overlay-noir";

      var agrandie = document.createElement("img");
      agrandie.src = this.src;
      agrandie.className = "image-agrandie";

      var croix = document.createElement("img");
      croix.src = "../logos/cross.webp";
      croix.className = "croix-btn croix-visible";
      croix.addEventListener("click", revenirInitial);

      projets.appendChild(overlay);
      projets.appendChild(agrandie);
      projets.appendChild(croix);

      agrandie.addEventListener("click", function() {
        projets.removeChild(agrandie);
        projets.removeChild(overlay);
        projets.removeChild(croix);
      });
    });
  }
}



function revenirInitial() {
  var agrandie = document.querySelector(".image-agrandie");
  var overlay = document.querySelector(".overlay-noir");
  var croix = document.querySelector(".croix-btn");

  if (agrandie) {
    agrandie.parentNode.removeChild(agrandie);
  }
  if (overlay) {
    overlay.parentNode.removeChild(overlay);
  }
  if (croix) {
    croix.parentNode.removeChild(croix);
  }
}