module demo_02_07{
    var squareItSimple = function (h: number, w: number) {
        return h * w;
    }

    var squareItSimple = (h: number, w: number) => h*w;

    var helloWorld: (name?: string) => void;
    helloWorld = (name?: string) => {
        console.log('Hello ' + (name || 'unknow person') );
    }

    helloWorld();
    helloWorld('Hoang');

    let squareIt: 
        (rect: {h: number; w?: number}) => number;
    let rectA = {h: 7};
    let rectB = {h: 7, w: 12};

    squareIt = function (rect) {
        if (rect.w !== undefined){ 
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    }
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
}