// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    });

    function destructivelyAppendCat(name){
        cats.push(name);
    };
    
    function destructivelyPrependCat(name){
        cats.unshift(name);
    };
    
    function destructivelyRemoveLastCat(name){
        cats.pop(name);
    };
    
    function destructivelyRemoveFirstCat(name){
        cats.shift(name);
    };

    function appendCat(name){
        const appendCat = cats.slice();
        appendCat.push(name);
        return appendCat;

    }

    function prependCat(name){
        const prependCat = cats.slice();
        prependCat.unshift(name);
        return prependCat;
    }

    function removeLastCat(){
        const removeLastCat = cats.slice();
        removeLastCat.pop();
        return removeLastCat;
    }

    function removeFirstCat(){
        const removeFirstCat = cats.slice();
        removeFirstCat.shift();
        return removeFirstCat;
    }