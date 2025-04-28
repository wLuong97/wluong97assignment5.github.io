function sayHello() {
    alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
}

function fancyText() {
    alert("You changed the style!");  // Step 1: Alert to show it worked

    let textArea = document.getElementById("userText");

    if (document.getElementById("fancy").checked) {
        // FancyShmancy is selected
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boring").checked) {
        // BoringBetty is selected
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}
function mooText() {
    let textArea = document.getElementById("userText");

    // Step 1: Uppercase the text
    textArea.value = textArea.value.toUpperCase();

    // Step 2: Add "-Moo" to the last word of each sentence
    let sentences = textArea.value.split(".");
    
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-Moo";
        }
    }
    
    textArea.value = sentences.join(". ") + ".";
}
