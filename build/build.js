var gui = new dat.GUI();
var params = {
    radius: 150,
    rectThickness: 3,
    maxLength: 8,
    minLength: 2,
    rectMargin: 4,
    shift: 1.5,
    randomSeed: 1,
    randomMode_1classic_2gaussian: 1,
    darkMode: 0,
    Download_Image: function () { return save(); },
};
gui.add(params, "randomMode_1classic_2gaussian", 1, 2, 1);
gui.add(params, "radius", 0, 200, 1);
gui.add(params, "rectThickness", 1, 10, 1);
gui.add(params, "minLength", 1, 20, 1);
gui.add(params, "maxLength", 1, 20, 1);
gui.add(params, "rectMargin", 1, 10, 1);
gui.add(params, "shift", 0.5, 10, 0.5);
gui.add(params, "randomSeed", 1, 100, 1);
gui.add(params, "darkMode", 0, 1, 1);
gui.add(params, "Download_Image");
function draw() {
    if (params.darkMode == 0) {
        background('white');
        noStroke();
        fill('black');
    }
    else {
        background(24, 26, 27);
        noStroke();
        fill('white');
    }
    randomSeed(params.randomSeed);
    if (params.randomMode_1classic_2gaussian == 1) {
        var compteur1 = 0;
        for (var x = 0; x < width / 2; x += params.rectThickness + params.rectMargin) {
            for (var y = 0; y < height / 2; y += params.rectThickness + params.rectMargin) {
                var valeurAlea = 0;
                if (sq(x - width / 4) + sq(y - height / 4) <= sq(params.radius)) {
                    if (sq(x - width / 4) + sq(y - height / 4 + params.radius) <= sq(params.radius)) {
                        valeurAlea = random(params.minLength, 2 / 3 * (params.maxLength));
                        if (random() < 0.5 && x < width / 4 + params.radius - 1 / 6 * params.radius && x > width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x, y, valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x, y, params.rectThickness, valeurAlea);
                        }
                    }
                    else {
                        valeurAlea = random(params.minLength, params.maxLength);
                        if (random() < 0.5 && x < width / 4 + params.radius - 1 / 6 * params.radius && x > width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x, y, valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x, y, params.rectThickness, valeurAlea);
                        }
                    }
                }
                compteur1++;
            }
        }
        var compteur2 = 0;
        for (var x = width / 2; x < width; x += params.rectThickness + params.rectMargin) {
            for (var y = 0; y < height / 2; y += params.rectThickness + params.rectMargin) {
                var valeurAlea = 0;
                var incertitude = params.shift;
                if (sq(x - 3 * width / 4) + sq(y - height / 4) <= sq(params.radius)) {
                    if (sq(x - 3 * width / 4) + sq(y - height / 4 + params.radius) <= sq(params.radius)) {
                        valeurAlea = random(params.minLength, 2 / 3 * (params.maxLength));
                        if (random() < 0.5 && x < 3 * width / 4 + params.radius - 1 / 6 * params.radius && x > 3 * width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), params.rectThickness, valeurAlea);
                        }
                    }
                    else {
                        valeurAlea = random(params.minLength, params.maxLength);
                        if (random() < 0.5 && x < 3 * width / 4 + params.radius - 1 / 6 * params.radius && x > 3 * width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), params.rectThickness, valeurAlea);
                        }
                    }
                }
                compteur2++;
            }
        }
        var compteur3 = 0;
        for (var x = 0; x < width / 2; x += params.rectThickness + params.rectMargin) {
            for (var y = height / 2; y < height; y += params.rectThickness + params.rectMargin) {
                var valeurAlea = 0;
                var incertitude = 4 * params.shift;
                if (sq(x - width / 4) + sq(y - 3 * height / 4) <= sq(params.radius)) {
                    if (sq(x - width / 4) + sq(y - 3 * height / 4 + params.radius) <= sq(params.radius)) {
                        valeurAlea = random(params.minLength, 2 / 3 * (params.maxLength));
                        if (random() < 0.5 && x < width / 4 + params.radius - 1 / 6 * params.radius && x > width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), params.rectThickness, valeurAlea);
                        }
                    }
                    else {
                        valeurAlea = random(params.minLength, params.maxLength);
                        if (random() < 0.5 && x < width / 4 + params.radius - 1 / 6 * params.radius && x > width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), params.rectThickness, valeurAlea);
                        }
                    }
                }
                compteur3++;
            }
        }
        var compteur4 = 0;
        for (var x = width / 2; x < width; x += params.rectThickness + params.rectMargin) {
            for (var y = height / 2; y < height; y += params.rectThickness + params.rectMargin) {
                var valeurAlea = 0;
                var incertitude = 12 * params.shift;
                if (sq(x - 3 * width / 4) + sq(y - 3 * height / 4) <= sq(params.radius)) {
                    if (sq(x - 3 * width / 4) + sq(y - 3 * height / 4 + params.radius) <= sq(params.radius)) {
                        valeurAlea = random(params.minLength, 2 / 3 * (params.maxLength));
                        if (random() < 0.5 && x < 3 * width / 4 + params.radius - 1 / 6 * params.radius && x > 3 * width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), params.rectThickness, valeurAlea);
                        }
                    }
                    else {
                        valeurAlea = random(params.minLength, params.maxLength);
                        if (random() < 0.5 && x < 3 * width / 4 + params.radius - 1 / 6 * params.radius && x > 3 * width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x + random(-incertitude, incertitude), y + random(-incertitude, incertitude), params.rectThickness, valeurAlea);
                        }
                    }
                }
                compteur4++;
            }
        }
    }
    if (params.randomMode_1classic_2gaussian == 2) {
        var compteur1 = 0;
        for (var x = 0; x < width / 2; x += params.rectThickness + params.rectMargin) {
            for (var y = 0; y < height / 2; y += params.rectThickness + params.rectMargin) {
                var valeurAlea = 0;
                if (sq(x - width / 4) + sq(y - height / 4) <= sq(params.radius)) {
                    if (sq(x - width / 4) + sq(y - height / 4 + params.radius) <= sq(params.radius)) {
                        valeurAlea = random(params.minLength, 2 / 3 * (params.maxLength));
                        if (random() < 0.5 && x < width / 4 + params.radius - 1 / 6 * params.radius && x > width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x, y, valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x, y, params.rectThickness, valeurAlea);
                        }
                    }
                    else {
                        valeurAlea = random(params.minLength, params.maxLength);
                        if (random() < 0.5 && x < width / 4 + params.radius - 1 / 6 * params.radius && x > width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x, y, valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x, y, params.rectThickness, valeurAlea);
                        }
                    }
                }
                compteur1++;
            }
        }
        var compteur2 = 0;
        for (var x = width / 2; x < width; x += params.rectThickness + params.rectMargin) {
            for (var y = 0; y < height / 2; y += params.rectThickness + params.rectMargin) {
                var valeurAlea = 0;
                var incertitude = params.shift;
                if (sq(x - 3 * width / 4) + sq(y - height / 4) <= sq(params.radius)) {
                    if (sq(x - 3 * width / 4) + sq(y - height / 4 + params.radius) <= sq(params.radius)) {
                        valeurAlea = random(params.minLength, 2 / 3 * (params.maxLength));
                        if (random() < 0.5 && x < 3 * width / 4 + params.radius - 1 / 6 * params.radius && x > 3 * width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x + randomGaussian(-incertitude, incertitude), y + randomGaussian(-incertitude, incertitude), valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x + randomGaussian(-incertitude, incertitude), y + randomGaussian(-incertitude, incertitude), params.rectThickness, valeurAlea);
                        }
                    }
                    else {
                        valeurAlea = random(params.minLength, params.maxLength);
                        if (random() < 0.5 && x < 3 * width / 4 + params.radius - 1 / 6 * params.radius && x > 3 * width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x + randomGaussian(-incertitude, incertitude), y + randomGaussian(-incertitude, incertitude), valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x + randomGaussian(-incertitude, incertitude), y + randomGaussian(-incertitude, incertitude), params.rectThickness, valeurAlea);
                        }
                    }
                }
                compteur2++;
            }
        }
        var compteur3 = 0;
        for (var x = 0; x < width / 2; x += params.rectThickness + params.rectMargin) {
            for (var y = height / 2; y < height; y += params.rectThickness + params.rectMargin) {
                var valeurAlea = 0;
                var incertitude = 4 * params.shift;
                if (sq(x - width / 4) + sq(y - 3 * height / 4) <= sq(params.radius)) {
                    if (sq(x - width / 4) + sq(y - 3 * height / 4 + params.radius) <= sq(params.radius)) {
                        valeurAlea = random(params.minLength, 2 / 3 * (params.maxLength));
                        if (random() < 0.5 && x < width / 4 + params.radius - 1 / 6 * params.radius && x > width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x + randomGaussian(-incertitude, incertitude), y + randomGaussian(-incertitude, incertitude), valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x + randomGaussian(-incertitude, incertitude), y + randomGaussian(-incertitude, incertitude), params.rectThickness, valeurAlea);
                        }
                    }
                    else {
                        valeurAlea = random(params.minLength, params.maxLength);
                        if (random() < 0.5 && x < width / 4 + params.radius - 1 / 6 * params.radius && x > width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x + randomGaussian(-incertitude, incertitude), y + randomGaussian(-incertitude, incertitude), valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x + randomGaussian(-incertitude, incertitude), y + randomGaussian(-incertitude, incertitude), params.rectThickness, valeurAlea);
                        }
                    }
                }
                compteur3++;
            }
        }
        var compteur4 = 0;
        for (var x = width / 2; x < width; x += params.rectThickness + params.rectMargin) {
            for (var y = height / 2; y < height; y += params.rectThickness + params.rectMargin) {
                var valeurAlea = 0;
                var incertitude = 12 * params.shift;
                if (sq(x - 3 * width / 4) + sq(y - 3 * height / 4) <= sq(params.radius)) {
                    if (sq(x - 3 * width / 4) + sq(y - 3 * height / 4 + params.radius) <= sq(params.radius)) {
                        valeurAlea = random(params.minLength, 2 / 3 * (params.maxLength));
                        if (random() < 0.5 && x < 3 * width / 4 + params.radius - 1 / 6 * params.radius && x > 3 * width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x + randomGaussian(-incertitude, incertitude), y + randomGaussian(-incertitude, incertitude), valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x + randomGaussian(-incertitude, incertitude), y + randomGaussian(-incertitude, incertitude), params.rectThickness, valeurAlea);
                        }
                    }
                    else {
                        valeurAlea = random(params.minLength, params.maxLength);
                        if (random() < 0.5 && x < 3 * width / 4 + params.radius - 1 / 6 * params.radius && x > 3 * width / 4 - params.radius + 1 / 6 * params.radius) {
                            rect(x + randomGaussian(-incertitude, incertitude), y + randomGaussian(-incertitude, incertitude), valeurAlea, params.rectThickness);
                        }
                        else {
                            rect(x + randomGaussian(-incertitude, incertitude), y + randomGaussian(-incertitude, incertitude), params.rectThickness, valeurAlea);
                        }
                    }
                }
                compteur4++;
            }
        }
    }
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map