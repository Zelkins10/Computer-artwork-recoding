// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    radius: 145,
    rectThickness: 3,
    maxLength: 8,
    minLength: 2,
    rectMargin: 4,
    shift: 1.5,
    random_and_noise_Seed: 1,
    randomMode_1classic_2gaussian_3noise: 1,
    darkMode: false,
    rectModeCENTER: true,

    Download_Image: () => save(),
}

gui.add(params, "randomMode_1classic_2gaussian_3noise", 1, 3, 1)
gui.add(params, "radius", 0, 200, 1)
gui.add(params, "rectThickness", 1, 10, 1)
gui.add(params, "minLength", 1, 20, 1)
gui.add(params, "maxLength", 1, 20, 1)
gui.add(params, "rectMargin", 1, 10, 1)
gui.add(params, "shift", 0.5, 10, 0.5)
gui.add(params, "random_and_noise_Seed", 1, 100, 1)
gui.add(params, "rectModeCENTER")
gui.add(params, "darkMode")
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------


function offset(incertitude, coordinate){
    switch (params.randomMode_1classic_2gaussian_3noise){
        case 1:
            return random(-incertitude, incertitude)
        case 2:
            return randomGaussian(0, incertitude)
        case 3:
            if(random() < 0.5){
                return -incertitude * noise(coordinate)
            }
            return incertitude * noise(coordinate)
    }
}

function draw() {

    // Activation ou non du thème sombre
    if(params.darkMode){
        background(24, 26, 27)
        noStroke()
        fill('white')
    }
    else{
        background('white')
        noStroke()
        fill('black')
    }

    // Activation ou non de rectMode(CENTER)
    if(params.rectModeCENTER){
        rectMode(CENTER)
    }
    else{
        rectMode(CORNER)
    }

    // Initialisation des fonctions d'aléatoire
    randomSeed(params.random_and_noise_Seed)
    noiseSeed(params.random_and_noise_Seed)

        
    // Tracé des rectangles dans le disque d'en haut à gauche :
    let compteur1 = 0

    for(let x = 0; x < width/2; x += params.rectThickness + params.rectMargin){ // rectMargin : marge pour les rectangles suivants
        for(let y = 0; y < height/2; y += params.rectThickness + params.rectMargin){ // rectMargin : marge pour le rectangle suivant
            
            let valeurAlea = 0

            if(sq(x-width/4) + sq(y-height/4) <= sq(params.radius)){ // si les coordonnées du point sont situées à l'intérieur du cercle principal
                if((-y+height/4)/params.radius > sq((x-width/4)/params.radius)){ // RECTANGLES DANS LA PARABOLE SUPERPOSÉE
                    // ancien arg du if : sq(x-width/4) + sq(y-height/4+params.radius) <= sq(params.radius)
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
    let compteur2 = 0

    for(let x = width/2; x < width; x += params.rectThickness + params.rectMargin){ // rectMargin : marge pour les rectangles suivants
        for(let y = 0; y < height/2; y += params.rectThickness + params.rectMargin){ // rectMargin : marge pour le rectangle suivant
            
            let valeurAlea = 0
            let incertitude = params.shift;

            if(sq(x-3*width/4) + sq(y-height/4) <= sq(params.radius)){ // si les coordonnées du point sont situées à l'intérieur du cercle principal
                if((-y+height/4)/params.radius > sq((x-3*width/4)/params.radius)){ // RECTANGLES DANS LA PARABOLE SUPERPOSÉE
                    // ancien arg du if : sq(x-3*width/4) + sq(y-height/4+params.radius) <= sq(params.radius)

                    valeurAlea = random(params.minLength, 2/3*(params.maxLength));

                    if(random() < 0.5 && x < 3*width/4 + params.radius - 1/6*params.radius && x > 3*width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x + offset(incertitude, x), y + offset(incertitude, y), valeurAlea, params.rectThickness) // largeur et position aléatoires
                    }
                    else{
                        rect(x + offset(incertitude, x), y + offset(incertitude, y), params.rectThickness, valeurAlea) // hauteur et position aléatoires
                    }
                }

                else{ // RECTANGLES DU CERCLE PRINCIPAL
                    valeurAlea = random(params.minLength, params.maxLength);

                    if(random() < 0.5 && x < 3*width/4 + params.radius - 1/6*params.radius && x > 3*width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x + offset(incertitude, x), y + offset(incertitude, y), valeurAlea, params.rectThickness) // largeur et position aléatoires
                    }
                    else{
                        rect(x + offset(incertitude, x), y + offset(incertitude, y), params.rectThickness, valeurAlea) // hauteur et position aléatoires
                    }
                }
            }
            compteur2++
        }
    }


    // Tracé des rectangles dans le disque d'en bas à gauche :
    let compteur3 = 0

    for(let x = 0; x < width/2; x += params.rectThickness + params.rectMargin){ // rectMargin : marge pour les rectangles suivants
        for(let y = height/2; y < height; y += params.rectThickness + params.rectMargin){ // rectMargin : marge pour le rectangle suivant
            
            let valeurAlea = 0
            let incertitude = 4*params.shift

            if(sq(x-width/4) + sq(y-3*height/4) <= sq(params.radius)){ // si les coordonnées du point sont situées à l'intérieur du cercle principal
                if((-y+3*height/4)/params.radius > sq((x-width/4)/params.radius)){ // RECTANGLES DANS LA PARABOLE SUPERPOSÉE
                    // ancien arg du if : sq(x-width/4) + sq(y-3*height/4+params.radius) <= sq(params.radius)

                    valeurAlea = random(params.minLength, 2/3*(params.maxLength));

                    if(random() < 0.5 && x < width/4 + params.radius - 1/6*params.radius && x > width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x + offset(incertitude, x), y + offset(incertitude, y), valeurAlea, params.rectThickness) // largeur et position aléatoires
                    }
                    else{
                        rect(x + offset(incertitude, x), y + offset(incertitude, y), params.rectThickness, valeurAlea) // hauteur et position aléatoires
                    }
                }

                else{ // RECTANGLES DU CERCLE PRINCIPAL
                    valeurAlea = random(params.minLength, params.maxLength);

                    if(random() < 0.5 && x < width/4 + params.radius - 1/6*params.radius && x > width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x + offset(incertitude, x), y + offset(incertitude, y), valeurAlea, params.rectThickness) // largeur et position aléatoires
                    }
                    else{
                        rect(x + offset(incertitude, x), y + offset(incertitude, y), params.rectThickness, valeurAlea) // hauteur et position aléatoires
                    }
                }
            }
            compteur3++
        }
    }


    // Tracé des rectangles dans le disque d'en bas à droite :
    let compteur4 = 0

    for(let x = width/2; x < width; x += params.rectThickness + params.rectMargin){ // rectMargin : marge pour les rectangles suivants
        for(let y = height/2; y < height; y += params.rectThickness + params.rectMargin){ // rectMargin : marge pour le rectangle suivant
            
            let valeurAlea = 0
            let incertitude = 12*params.shift

            if(sq(x-3*width/4) + sq(y-3*height/4) <= sq(params.radius)){ // si les coordonnées du point sont situées à l'intérieur du cercle principal
                if((-y+3*height/4)/params.radius > sq((x-3*width/4)/params.radius)){ // RECTANGLES DANS LA PARABOLE SUPERPOSÉE
                    // ancien arg du if : sq(x-3*width/4) + sq(y-3*height/4+params.radius) <= sq(params.radius)

                    valeurAlea = random(params.minLength, 2/3*(params.maxLength));

                    if(random() < 0.5 && x < 3*width/4 + params.radius - 1/6*params.radius && x > 3*width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x + offset(incertitude, x), y + offset(incertitude, y), valeurAlea, params.rectThickness) // largeur et position aléatoires
                    }
                    else{
                        rect(x + offset(incertitude, x), y + offset(incertitude, y), params.rectThickness, valeurAlea) // hauteur et position aléatoires
                    }
                }

                else{ // RECTANGLES DU CERCLE PRINCIPAL
                    valeurAlea = random(params.minLength, params.maxLength);

                    if(random() < 0.5 && x < 3*width/4 + params.radius - 1/6*params.radius && x > 3*width/4 - params.radius + 1/6*params.radius){ // 1 chance sur 2, sauf pour les côtés
                        rect(x + offset(incertitude, x), y + offset(incertitude, y), valeurAlea, params.rectThickness) // largeur et position aléatoires
                    }
                    else{
                        rect(x + offset(incertitude, x), y + offset(incertitude, y), params.rectThickness, valeurAlea) // hauteur et position aléatoires
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