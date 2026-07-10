const photos = [
    "visage1.jpg",
    "visage2.jpg",
    "visage3.jpg",
   "visage4.jpg",
    "visage5.jpg",
    "visage6.jpg",
   "visage7.jpg",
    "visage8.jpg",
    "visage9.jpg",
   "visage10.jpg",
    "visage11.jpg",
	"visage12.jpg",
    "visage13.jpg"	
];


const img = document.getElementById("photo-aleatoire");


// Choix aléatoire au chargement de la page
const choix = Math.floor(Math.random() * photos.length);


// Chargement de l'image choisie
img.src = photos[choix];


// Apparition douce une fois l'image chargée
img.onload = function() {
    img.style.opacity = 1;
};

const button = document.getElementById("theme-toggle");
const icone = document.getElementById("theme-icon");

const logoCnrs = document.getElementById("logo-cnrs");
const logoImj = document.getElementById("logo-imj");

function mettreAJourLogos() {

	if (!logoCnrs || !logoImj) return;

    if (document.documentElement.classList.contains("dark")) {

        logoCnrs.src = "logo_cnrs_blanc.png";
        logoImj.src = "logo_IMJ-PRG_blanc.png";

    } else {

        logoCnrs.src = "logo_cnrs.png";
        logoImj.src = "logo_IMJ-PRG.png";

    }

}


// Détecte le thème du système
const systemeSombre = window.matchMedia("(prefers-color-scheme: dark)").matches;


// Vérifie si l'utilisateur a déjà choisi un thème
const themeSauvegarde = localStorage.getItem("theme");


// Au chargement de la page
if (themeSauvegarde === "dark" || 
    (themeSauvegarde === null && systemeSombre)) {

    document.documentElement.classList.add("dark");
    icone.textContent = "🌙";

} else {

    icone.textContent = "☀️";

}

mettreAJourLogos();



// Quand on clique sur le bouton
button.addEventListener("click", function () {

    document.documentElement.classList.toggle("dark");


    if (document.documentElement.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        icone.textContent = "🌙";

    } else {

        localStorage.setItem("theme", "light");
        icone.textContent = "☀️";

    }



mettreAJourLogos();

});

