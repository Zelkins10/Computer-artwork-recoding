// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    radius: 150,
    rectThickness: 3,
    maxLength: 8,
    minLength: 2,
    rectMargin: 4,
    shift: 1.5,
    randomSeed: 1,
    //mode: 1,

    Download_Image: () => save(),
}

//gui.add(params, "mode", 1, 2, 1)
gui.add(params, "radius", 0, 200, 1)
gui.add(params, "rectThickness", 1, 10, 1)
gui.add(params, "minLength", 1, 20, 1)
gui.add(params, "maxLength", 1, 20, 1)
gui.add(params, "rectMargin", 1, 10, 1)
gui.add(params, "shift", 0.5, 10, 0.5)
gui.add(params, "randomSeed", 1, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------


function draw() {
    background('white')
    noStroke()
    fill('black')

    randomSeed(params.randomSeed)

    // if(mode == 1){déplacer le dessin classique des 4 disques ici}

    // Tracé des rectangles dans le disque d'en haut à gauche :
    //rectMode(CENTER)
    let compteur1 = 0

    for(let x = 0; x < width/2; x += params.rectThickness + params.rectMargin){ // rectMargin : marge pour les rectangles suivants
        for(let y = 0; y < height/2; y += params.rectThickness + params.rectMargin){ // rectMargin : marge pour le rectangle suivant
            
            let valeurAlea = 0

            if(sq(x-width/4) + sq(y-height/4) <= sq(params.radius)){ // si les coordonnées du point sont situées à l'intérieur du cercle principal
                if(sq(x-width/4) + sq(y-height/4+params.radius) <= sq(params.radius)){ // RECTANGLES DU CERCLE SUPERPOSÉ (SECONDAIRE)
                    // ancien arg du if : sq(x-width/4) + sq(y-height/4+params.radius) <= sq(params.radius)
                    // futur arg (en chantier) du if pour conditionner sur l'intérieur d'une parabole : y-height/4+params.radius > sq(x-width/4)
                    valeurAlea = random(params.minLength, 2/3*(params.maxLength));

                    if(random() < 0.5 && x < width/4 + params.radius - 1/6*params.radius && x > width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x, y, valeurAlea, params.rectThickness) // largeur aléatoire
                    }
                    else{
                        rect(x, y, params.rectThickness, valeurAlea) // hauteur aléatoire
                    }
                }

                else{ // RECTANGLES DU CERCLE PRINCIPAL
                    valeurAlea = random(params.minLength, params.maxLength);

                    if(random() < 0.5 && x < width/4 + params.radius - 1/6*params.radius && x > width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x, y, valeurAlea, params.rectThickness) // largeur aléatoire
                    }
                    else{
                        rect(x, y, params.rectThickness, valeurAlea) // hauteur aléatoire
                    }
                }
            }
            compteur1++
        }
    }
    

    // Tracé des rectangles dans le disque d'en haut à droite :
    //rectMode(CENTER)
    let compteur2 = 0

    for(let x = width/2; x < width; x += params.rectThickness + params.rectMargin){ // rectMargin : marge pour les rectangles suivants
        for(let y = 0; y < height/2; y += params.rectThickness + params.rectMargin){ // rectMargin : marge pour le rectangle suivant
            
            let valeurAlea = 0
            let incertitude = params.shift;

            if(sq(x-3*width/4) + sq(y-height/4) <= sq(params.radius)){ // si les coordonnées du point sont situées à l'intérieur du cercle principal
                if(sq(x-3*width/4) + sq(y-height/4+params.radius) <= sq(params.radius)){ // RECTANGLES DU CERCLE SUPERPOSÉ (SECONDAIRE)
                    valeurAlea = random(params.minLength, 2/3*(params.maxLength));

                    if(random() < 0.5 && x < 3*width/4 + params.radius - 1/6*params.radius && x > 3*width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), valeurAlea, params.rectThickness) // largeur et position aléatoires
                    }
                    else{
                        rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), params.rectThickness, valeurAlea) // hauteur et position aléatoires
                    }
                }

                else{ // RECTANGLES DU CERCLE PRINCIPAL
                    valeurAlea = random(params.minLength, params.maxLength);

                    if(random() < 0.5 && x < 3*width/4 + params.radius - 1/6*params.radius && x > 3*width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), valeurAlea, params.rectThickness) // largeur et position aléatoires
                    }
                    else{
                        rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), params.rectThickness, valeurAlea) // hauteur et position aléatoires
                    }
                }
            }
            compteur2++
        }
    }


    // Tracé des rectangles dans le disque d'en bas à gauche :
    //rectMode(CENTER)
    let compteur3 = 0

    for(let x = 0; x < width/2; x += params.rectThickness + params.rectMargin){ // rectMargin : marge pour les rectangles suivants
        for(let y = height/2; y < height; y += params.rectThickness + params.rectMargin){ // rectMargin : marge pour le rectangle suivant
            
            let valeurAlea = 0
            let incertitude = 4*params.shift

            if(sq(x-width/4) + sq(y-3*height/4) <= sq(params.radius)){ // si les coordonnées du point sont situées à l'intérieur du cercle principal
                if(sq(x-width/4) + sq(y-3*height/4+params.radius) <= sq(params.radius)){ // RECTANGLES DU CERCLE SUPERPOSÉ (SECONDAIRE)
                    
                    valeurAlea = random(params.minLength, 2/3*(params.maxLength));

                    if(random() < 0.5 && x < width/4 + params.radius - 1/6*params.radius && x > width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), valeurAlea, params.rectThickness) // largeur et position aléatoires
                    }
                    else{
                        rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), params.rectThickness, valeurAlea) // hauteur et position aléatoires
                    }
                }

                else{ // RECTANGLES DU CERCLE PRINCIPAL
                    valeurAlea = random(params.minLength, params.maxLength);

                    if(random() < 0.5 && x < width/4 + params.radius - 1/6*params.radius && x > width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), valeurAlea, params.rectThickness) // largeur et position aléatoires
                    }
                    else{
                        rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), params.rectThickness, valeurAlea) // hauteur et position aléatoires
                    }
                }
            }
            compteur3++
        }
    }


    // Tracé des rectangles dans le disque d'en bas à gauche :
    //rectMode(CENTER)
    let compteur4 = 0

    for(let x = width/2; x < width; x += params.rectThickness + params.rectMargin){ // rectMargin : marge pour les rectangles suivants
        for(let y = height/2; y < height; y += params.rectThickness + params.rectMargin){ // rectMargin : marge pour le rectangle suivant
            
            let valeurAlea = 0
            let incertitude = 12*params.shift

            if(sq(x-3*width/4) + sq(y-3*height/4) <= sq(params.radius)){ // si les coordonnées du point sont situées à l'intérieur du cercle principal
                if(sq(x-3*width/4) + sq(y-3*height/4+params.radius) <= sq(params.radius)){ // RECTANGLES DU CERCLE SUPERPOSÉ (SECONDAIRE)
                    
                    valeurAlea = random(params.minLength, 2/3*(params.maxLength));

                    if(random() < 0.5 && x < 3*width/4 + params.radius - 1/6*params.radius && x > 3*width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), valeurAlea, params.rectThickness) // largeur et position aléatoires
                    }
                    else{
                        rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), params.rectThickness, valeurAlea) // hauteur et position aléatoires
                    }
                }

                else{ // RECTANGLES DU CERCLE PRINCIPAL
                    valeurAlea = random(params.minLength, params.maxLength);

                    if(random() < 0.5 && x < 3*width/4 + params.radius - 1/6*params.radius && x > 3*width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), valeurAlea, params.rectThickness) // largeur et position aléatoires
                    }
                    else{
                        rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), params.rectThickness, valeurAlea) // hauteur et position aléatoires
                    }
                }
            }
            compteur4++
        }
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