function getText() {
    return document.getElementById("logic").value;
}

function latexify() {
    var text;
    var tokens = new Array();
    getText().split(" ").forEach(s => {
        if (s != "" || s != " ") {
            s = s.includes("\n") ? s.replace("\n", "\\\\\n\\;\\equiv\\; & ") : s;
            s = s.includes("[") ? "&& ".concat("", s) : s;
            s = s.includes("!") ? s.replace("!", "\\neg ") : s;
            switch(s) {
                case "not":
                    x = "\\neg";
                    break;
                case "and":
                case "^":
                    x = "\\wedge";
                    break;
                case "or":
                case "v":
                    x = "\\vee";
                    break;
                case "implies":
                case "->":
                    x = "\\rightarrow";
                    break;
                case "equiv":
                case "===":
                    x = "\\;\\equiv\\; &";
                    break;
                default:
                    x = s;
            }
        }
        tokens.push(x);
    });
    
    text = "\\begin{align*}\n".concat("", tokens[0]);
    for (let i = 1; i < tokens.length; i++) {
        const s = tokens[i];
        text = text.concat(" ", s)
    }
    text = text.concat("", "\n\\end{align*}")

    document.getElementById("latex").value = text;
}