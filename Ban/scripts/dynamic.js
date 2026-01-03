const overallBox = document.getElementById("containerBox");

// Create top of piano
const topOfPiano = document.createElement("div");
topOfPiano.id = "topPianoLine";
topOfPiano.style.position = "absolute";
topOfPiano.style.width = "100%";
topOfPiano.style.height = "0.5%";
topOfPiano.style.top = "70%"
topOfPiano.style.backgroundColor = "black";
overallBox.appendChild(topOfPiano);
