// Alert to test script linkage
function showAlert() {
    alert("Hello, world!");
}

// Function to increase text size
function makeBigger() {
    const textArea = document.getElementById("text-area");
    textArea.style.fontSize = "24pt";
}

// Function to apply FancyShmancy styling
function applyFancy() {
    const textArea = document.getElementById("text-area");
    const isFancy = document.getElementById("fancy-shmancy").checked;

    if (isFancy) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to "Moo-ify" the text
function makeMoo() {
    const textArea = document.getElementById("text-area");
    let text = textArea.value.toUpperCase();
    const sentences = text.split(".");
    text = sentences
        .map(sentence => sentence.trim() + "-Moo")
        .join(". ")
        .trim();
    textArea.value = text;
}

// Event listeners using addEventListener
document.getElementById("bigger-button").addEventListener("click", makeBigger);
document.getElementById("bigger-button").addEventListener("click", showAlert);
document.getElementById("fancy-shmancy").addEventListener("change", applyFancy);
document.getElementById("boring-betty").addEventListener("change", applyFancy);
document.getElementById("moo-button").addEventListener("click", makeMoo);
