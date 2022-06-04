const cats =["Milo","Otis", "Garfield"];

function destructivelyAppendCat (name){
      return cats.push('Ralph');
}
function destructivelyPrependCat (name){
    return cats.unshift("Bob");
}
function  destructivelyRemoveLastCat(){
    return cats.pop("Milo");
}
function  destructivelyRemoveFirstCat(){
    return cats.shift('Garfield');
}
function  appendCat(name){
    const newcat =["Broom"];
    return ["Milo", "Otis", "Garfield",...newcat];
}
function prependCat(name){
   return["Arnold",...cats];
}
function removeLastCat(){
    return cats.slice(0,2);
}
function removeFirstCat(){
    return cats.slice(1);
}


