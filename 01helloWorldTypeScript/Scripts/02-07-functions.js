var demo_02_07;
(function (demo_02_07) {
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var squareItSimple = function (h, w) { return h * w; };
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello ' + (name || 'unknow person'));
    };
    helloWorld();
    helloWorld('Hoang');
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        if (rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
})(demo_02_07 || (demo_02_07 = {}));
