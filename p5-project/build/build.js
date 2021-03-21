var gui = new dat.GUI();
var params = {
    radius: 150,
    rectThickness: 3,
    maxLength: 8,
    minLength: 2,
    rectMargin: 3,
    Download_Image: function () { return save(); },
};
gui.add(params, "radius", 0, 200, 1);
gui.add(params, "rectThickness", 1, 10, 1);
gui.add(params, "maxLength", 1, 20, 1);
gui.add(params, "rectMargin", 1, 10, 1);
gui.add(params, "Download_Image");
function draw() {
    background('white');
    noStroke();
    fill('black');
    var compteur1 = 0;
    randomSeed(compteur1);
    for (var x = 0; x < width / 2; x += params.rectThickness + params.rectMargin + 1) {
        for (var y = 0; y < height / 2; y += params.rectThickness + params.rectMargin + 1) {
            var valeurAlea = 0;
            if (sq(x - width / 4) + sq(y - height / 4) <= sq(params.radius)) {
                if (sq(x - width / 4) + sq(y - height / 4 + params.radius) <= sq(params.radius)) {
                    valeurAlea = random(params.minLength, 2 / 3 * (params.maxLength));
                    if (random() < 0.5) {
                        rect(x, y, valeurAlea, params.rectThickness);
                    }
                    else {
                        rect(x, y, params.rectThickness, valeurAlea);
                    }
                }
                else {
                    valeurAlea = random(params.minLength, params.maxLength);
                    if (random() < 0.5) {
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