const overallBox = document.getElementById("containerBox");
const distanceFromTop = 70;
const fragment = document.createDocumentFragment();
const heightOfPiano = 30;
// Create top of piano
const topOfPiano = document.createElement("div");
topOfPiano.id = "topPianoLine";
topOfPiano.style.position = "absolute";
topOfPiano.style.width = "100%";
topOfPiano.style.height = "0.5%";
topOfPiano.style.top = `${distanceFromTop}%`
topOfPiano.style.backgroundColor = "black";
fragment.appendChild(topOfPiano);

function createFallofLetters(xPos, value,colour){
    const letters = value.split("");
    const numberOfLetters = letters.length
    const intervalDistance = Math.floor(distanceFromTop / numberOfLetters) - 1
    for (let i = 0; i < numberOfLetters; i++ ){
        const letter = document.createElement("div");
        letter.style.position = "absolute";
        letter.textContent = letters[i];    
        letter.style.left = `${xPos}%`
        letter.style.color = colour
        const yPos = i + (i*intervalDistance)
        letter.style.top = `${yPos}%`
        fragment.appendChild(letter)
    } 
}
// Create bottom of piano
const bottomOfPiano = document.createElement("div");
bottomOfPiano.id = "bottomPianoLine";
bottomOfPiano.style.position = "absolute";
bottomOfPiano.style.width = "100%";
bottomOfPiano.style.height = "0.5%";
bottomOfPiano.style.top = `${distanceFromTop + heightOfPiano}%`
bottomOfPiano.style.backgroundColor = "black";
fragment.appendChild(bottomOfPiano);

// Create white piano keys
let reachedEnd = false;
let xPos = 0
const incrementation = 4;
function checkIfAtEnd(){
    // pass
}
// 2 then 3 
const blackKeyPattern = [true, true, false, true, true, true, false];
const codingWords = ["Python","Javascript","C","REST APIs","React","Django"]
const codingWordsColours = ["Red","Blue","Green","Purple"]
let patternIndex = 0;
let codingWordsIndex = 0;
while (!reachedEnd){
    const whiteKey = document.createElement("div");
    whiteKey.style.position = "absolute";
    whiteKey.style.width = "0.06%";
    whiteKey.style.height = `${heightOfPiano}%`;
    whiteKey.style.top = `${distanceFromTop}%`;
    whiteKey.style.left = `${xPos}%`
    whiteKey.style.backgroundColor = "black";
    fragment.appendChild(whiteKey)
    // document.body.style.background = "linear-gradient(135deg, #0f2027, #1f3b4d, #d4af37)";
    const blackKeyWidth = 0.3 * incrementation;
    const blackKeyLeft = xPos + 0.85 * incrementation;

    if(xPos < 100-incrementation && blackKeyPattern[patternIndex] && blackKeyLeft + blackKeyWidth <= 100){
        const blackKey = document.createElement("div");
        blackKey.style.position = "absolute";
        blackKey.style.width = `${blackKeyWidth}%`;
        blackKey.style.height = "22%";
        blackKey.style.top = `${distanceFromTop}%`;
        blackKey.style.left = `${blackKeyLeft}%`;
        if (patternIndex % 2 == 0) {
            createFallofLetters(blackKeyLeft + blackKeyWidth/4,codingWords[codingWordsIndex],codingWordsColours[codingWordsIndex]);
            blackKey.style.background = "linear-gradient(135deg, #0f2027, #1f3b4d, #d4af37)"
        }else{
            blackKey.style.backgroundColor = "black";
        }
        fragment.appendChild(blackKey);
    }
    patternIndex = (patternIndex + 1) % blackKeyPattern.length;
    codingWordsIndex = (codingWordsIndex + 1)  % codingWords.length;
    if(xPos == 100){
        reachedEnd = true;
    }else{
        xPos += incrementation;
    }
}


overallBox.appendChild(fragment);