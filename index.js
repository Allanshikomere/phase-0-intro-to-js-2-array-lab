// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]; 
function destructivelyAppendCat(name) {
    cats.splice (3,0,`${name}`)
    return cats
}

function destructivelyPrependCat(name) {
    cats.splice (0,0,`${name}`)
    return cats
}

function destructivelyRemoveLastCat() {
    cats.splice (-1)
    return cats
}
function destructivelyRemoveFirstCat() {
    cats.splice (0,1)
    return cats
}
function appendCat(name){
const newcats = [...cats,`${name}`]
return newcats
}
function prependCat(name) {
    const newcats = [`${name}`,...cats]
    return newcats
}
function removeLastCat() {
const newcats = cats.slice ()
newcats.pop ()
return newcats
}
function removeFirstCat() {
    const newcats = cats.slice ()
newcats.shift ()
return newcats
}
