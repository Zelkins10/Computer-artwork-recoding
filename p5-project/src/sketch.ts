// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    radius: 150,
    rectThickness: 3,
    maxLength: 8,
    minLength: 2,
    rectMargin: 3,

    Download_Image: () => save(),
}

gui.add(params, "radius", 0, 200, 1)
gui.add(params, "rectThickness", 1, 10, 1)
gui.add(params, "Download_Image")
gui.add(params, "maxLength", 1, 20, 1)
gui.add(params, "rectMargin", 1, 10, 1)

// -------------------
//       Drawing
// -------------------



function isEven(value){
	if (value % 2 == 0)
		return true;
	else
		return false;
}



function draw() {
    background('white')
    noStroke()
    fill('black')


    // Tracé des rectangles dans le disque d'en haut à gauche :
    //rectMode(CENTER)
    let compteur = 0

    randomSeed(compteur)

    for(let x = 0; x < width/2; x++){
        for(let y = 0; y < height/2; y++){
            
            //randomSeed(compteur)
            
            // [ancien] let valeurAlea = Math.floor(Math.random() * params.maxLength) + 1
            let valeurAlea = 0
            let testParite = Math.floor(random(1,3));

            if((x-width/4)*(x-width/4) + (y-height/4)*(y-height/4) <= params.radius*params.radius){ // si les coordonnées du point sont situées à l'intérieur du cercle principal
                // ancien argument du if : (x-width/4)*(x-width/4) + (y-height/4)*(y-height/4) <= params.radius*params.radius
                if((x-width/4)*(x-width/4) + (y-height/4+params.radius)*(y-height/4+params.radius) <= (params.radius*params.radius)){ // RECTANGLES DU CERCLE SUPERPOSÉ (SECONDAIRE)
                    valeurAlea = random(params.minLength, 2/3*(params.maxLength));

                    if(isEven(testParite)){ // Si un entier aléatoire (1 ou 2) est pair
                        rect(x, y, valeurAlea, params.rectThickness) // largeur aléatoire
                    }
                    else{
                        rect(x, y, params.rectThickness, valeurAlea) // hauteur aléatoire
                    }
                }

                else{ // RECTANGLES DU CERCLE PRINCIPAL
                    valeurAlea = random(params.minLength, params.maxLength);

                    if(isEven(testParite)){ // Si un entier aléatoire (1 ou 2) est pair
                        rect(x, y, valeurAlea, params.rectThickness) // largeur aléatoire
                    }
                    else{
                        rect(x, y, params.rectThickness, valeurAlea) // hauteur aléatoire
                    }
                }
            }
            y = y + params.rectThickness + params.rectMargin // marge pour le rectangle suivant : 3 (car y++ + le 2)
            compteur++
        }
        x = x + params.rectThickness + params.rectMargin // marge pour les rectangles suivants : 3 (car x++ + le 2)
    }
    
}


// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}