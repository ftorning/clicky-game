

class Character {
    constructor(name, img_url, val) {
        this.name = name;
        this.img_url = img_url;
        this.val = val;
        this.flipped = false;
        this.matched = false;
        this.index = "";
    }
}

let crabs = new Character('Mr. Krabs', './images/crabs.png', 0);
let dutchman = new Character('Flying Dutchman', './images/dutchman.png', 1);
let gary = new Character('Gary', './images/gary.png', 2);
let karen = new Character('Karen', './images/karen.png', 3);
let larry = new Character('Larry', './images/larry.png', 4);
let patrick = new Character('Patrick', './images/patrick.png', 5);
let pearl = new Character('Pearl', './images/pearl.png', 6);
let plankton = new Character('Plankton', './images/plankton.jpg', 7);
let puff = new Character('Ms. Puff', './images/puff.png', 8);
let sandy = new Character('Sandy', './images/sandy.png', 9);
let spongebob = new Character('Spongebob', './images/spongebob.png', 10);
let squidward = new Character('Squidward', './images/squidward.png', 11);

const charList = [
    crabs,
    dutchman,
    gary,
    karen,
    larry,
    patrick,
    pearl,
    plankton,
    puff,
    sandy,
    spongebob,
    squidward
]

// from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  

function randomizedCharList() {
    return new Promise((resolve, reject) => {
        let output = [];
        for (let i = 0; i < charList.length; i++) {
            // twice
            output.push(charList[i]);
            output.push(charList[i]);
        }
        output = shuffle(output);
        resolve(output);
    })
}

export default randomizedCharList;