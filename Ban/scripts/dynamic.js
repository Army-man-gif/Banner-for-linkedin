const overallBox = document.getElementById("containerBox");
const distanceFromTop = 70;
const fragment = document.createDocumentFragment();
// Create top of piano
const topOfPiano = document.createElement("div");
topOfPiano.id = "topPianoLine";
topOfPiano.style.position = "absolute";
topOfPiano.style.width = "100%";
topOfPiano.style.height = "0.5%";
topOfPiano.style.top = `${distanceFromTop}%`
topOfPiano.style.backgroundColor = "black";
fragment.appendChild(topOfPiano);

// Create bottom of piano
const bottomOfPiano = document.createElement("div");
bottomOfPiano.id = "bottomPianoLine";
bottomOfPiano.style.position = "absolute";
bottomOfPiano.style.width = "100%";
bottomOfPiano.style.height = "0.5%";
bottomOfPiano.style.top = "100%"
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
let blackKeyPattern = [true, true, false, true, true, true, false];
let patternIndex = 0;

while (!reachedEnd){
    const whiteKey = document.createElement("div");
    whiteKey.style.position = "absolute";
    whiteKey.style.width = "0.06%";
    whiteKey.style.height = `${100-distanceFromTop}%`;
    whiteKey.style.top = `${distanceFromTop}%`;
    whiteKey.style.left = `${xPos}%`
    whiteKey.style.backgroundColor = "black";
    fragment.appendChild(whiteKey)

    const blackKeyWidth = 0.3 * incrementation;
    const blackKeyLeft = xPos + 0.85 * incrementation;

    if(xPos < 100-incrementation && blackKeyPattern[patternIndex] && blackKeyLeft + blackKeyWidth <= 100){
        const blackKey = document.createElement("div");
        blackKey.style.position = "absolute";
        blackKey.style.width = `${blackKeyWidth}%`;
        blackKey.style.height = "22%";
        blackKey.style.top = `${distanceFromTop}%`;
        blackKey.style.left = `${blackKeyLeft}%`;
        blackKey.style.backgroundColor = "black";
        fragment.appendChild(blackKey);
    }
    patternIndex = (patternIndex + 1) % blackKeyPattern.length;
    if(xPos == 100){
        reachedEnd = true;
    }else{
        xPos += incrementation;
    }
}


overallBox.appendChild(fragment);