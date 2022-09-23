const words = [
    "Organic food",
    "Delicious food ",
    "Healthy food",
]

const putIn = document.getElementById("put_in")

let letter = 0
let word = 0

const addingWord = () =>{
    if(letter <= words[word].length){
        let str = words[word].substr(0, letter)
        putIn.innerHTML = str
        letter++
        setTimeout(addingWord, 100)
    }else{
        setTimeout(rubOutWord, 700)
    }
}

const rubOutWord = () =>{
    if(letter >= 0){
        let str = words[word].substr(0, letter)
        putIn.innerHTML = str
        letter--
        setTimeout(rubOutWord, 100) 
    }else{
        word++
        if(words.length == word)
        word = 0
        setTimeout(addingWord, 100)
    }
}

addingWord()