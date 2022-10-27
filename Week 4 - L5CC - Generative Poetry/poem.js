// this is a function to return a random element from an array
function randomElementFromArray(inputArray){
    let randomIndex = Math.floor(Math.random() * inputArray.length)
    return inputArray[randomIndex]
}

let songName = ["Crazy frog","Gangnam Style","Mambo Number 5"]


let pronouns = ["I","we","they","he","she"]
let verbs = ["dabbed","swagged","twerked","suckled","jump","tip toed","boogied"]
let adverbs = ["voilently","quickly","suspiciously","quietly","loudly"]



let titlestart = ["grooviest", "most devious","most unforgettable"]
let titlemiddle = ["moment", "sesh", "event"]
let titleEnd = ["of the year","of my life","of the week","in history"]

let start = randomElementFromArray(titlestart)
let middle = randomElementFromArray(titlemiddle)
let end = randomElementFromArray(titleEnd) 

let header ="The " + start + " " + middle + " " + end
document.getElementById("heading").innerHTML = header

// let poem = opener + " " + pronouns + " " + verbs + " " + adverbs


let longpoem = ""

for(let i = 0; i < 10; i++){
    let song = randomElementFromArray(songName)
    let openingLine = "On a dank evening, the "+ song + " played as"
    let pronoun = randomElementFromArray(pronouns)
    let verb = randomElementFromArray(verbs)
    let adverb = randomElementFromArray(adverbs)
    longpoem += openingLine + " " + pronoun + " " + verb + " " + adverb
    longpoem += "<br>"
}
document.getElementById("para").innerHTML = longpoem
console.log(longpoem)
