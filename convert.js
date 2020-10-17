'use strict'; 

function getText() {
    return document.getElementById("logic").value;
}

const LatexDictionary = new Map([
    ["not", "\\neg"],
    ["and", "\\wedge"],
    ["^", "\\wedge"],
    ["or", "\\vee"],
    ["v", "\\vee"],
    ["implies", "\\rightarrow"],
    ["->", "\\rightarrow"],
    ["equiv",  "\\;\\equiv\\; &"],
    ["===", "\\;\\equiv\\; &"],
    ["<->", "\\iff"],
    ["E", "\\exists"],
    ["V", "\\forall"]
]); 


function latexify() {
    let text;
    let tokens = new Array();
    getText().split(" ").forEach(s => {
        let nextToken;

        if (s != "" || s != " ") {
            s = s.includes("\n") ? s.replace("\n", "\\\\\n\\;\\equiv\\; & ") : s;
            s = s.includes("[") ? "&& ".concat("", s) : s;
            s = s.includes("!") ? s.replace("!", "\\neg ") : s;

            // Use map as look-up table for respective latex code 
            const latexCode = LatexDictionary.get(s);
            nextToken = (latexCode) ? latexCode : s; 
            
        }
        tokens.push(nextToken);
    });
    
    text = "\\begin{align*}\n".concat("", tokens[0]);
    for (let i = 1; i < tokens.length; i++) {
        const s = tokens[i];
        text = text.concat(" ", s)
    }
    text = text.concat("", "\n\\end{align*}")

    document.getElementById("latex").value = text;
}