function getText() {
    return document.getElementById("logic").value;
}

function latexify() {
    document.getElementById("latex").value = getText();
}