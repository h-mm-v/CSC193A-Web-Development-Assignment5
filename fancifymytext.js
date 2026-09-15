function sayHello() {
    alert("Hello, world!");
}

function increaseFontSize() {
    document.getElementById("text").style.fontSize = "24pt";
}

function fancyAlert() {
    alert("You have selected FancySchmancy");
}

function boringAlert() {
    alert("You have selected BoringBetty");
}

function radioEvent() {
    const fancifyButton = document.getElementById("fancySchmancy");
    const boringButton = document.getElementById("boringBetty");
    const textElement = document.getElementById("text");

    if (fancifyButton.checked) {
        textElement.style.fontWeight = "bold";
        textElement.style.color = "blue";
        textElement.style.textDecoration = "underline";
    }

    if (boringButton.checked) {
        textElement.style.fontWeight = "normal";
        textElement.style.color = "black";
        textElement.style.textDecoration = "none";
    }
}

function mooify() {
    const textElement = document.getElementById("text");
    textElement.value = textElement.value.toUpperCase();

    var sentences = textElement.value.split(".");
    textElement.value = sentences.join("-Moo.");
}
