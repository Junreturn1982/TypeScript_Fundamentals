var demo_02_08;
(function (demo_02_08) {
    var squareItBasic = function (num) { return num * num; };
    var squareIt;
    // let squareIt: (rect: {h: number; w?: number}) => number;
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
    var p = {
        favoriteMovie: 'Lan Quye Phuong',
        name: 'Hoang',
        age: 36,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
            return msg + ', ' + this.name;
        }
    };
    var pets = p.calcPets();
    console.log(pets);
    p.makeYounger(15);
    var newAge = p.age;
    console.log(newAge);
    var msg = p.greet('Good day to you');
    console.log(msg);
    function sessionEvaluator() {
        var ratings = [];
        var addRating = function (rating) {
            if (rating === void 0) { rating = 5; }
            return ratings.push(rating);
        };
        ;
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (score) {
                sum += score;
            });
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);
    console.log(s.calcRating());
})(demo_02_08 || (demo_02_08 = {}));
