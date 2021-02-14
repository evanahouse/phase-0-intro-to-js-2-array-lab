// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(){
     cats.push('Ralph');
}

function destructivelyPrependCat(){
     cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
     cats.pop();
}

function destructivelyRemoveFirstCat(){
     cats.shift();
}
function appendCat(name){
    const moreCats = [...cats, name = "Broom"];
    return moreCats;
}

function prependCat(name){
    const moreCats = [name = "Arnold", ...cats];
    return moreCats;
}

function removeLastCat(){
    const lessCats = cats.slice(0, cats.length -1);
    return lessCats;
}

function removeFirstCat(){
    const lessCats = cats.slice(1);
    return lessCats;
}
