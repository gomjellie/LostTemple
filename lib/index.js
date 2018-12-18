
const { TabSpaceError, TabSpaceDiffError } = require("./Error");

module.exports = {
    cat2c: cat2c,
};

function cat2c(originCode) {
    /**
     * transpile .cat to .c
     *
     * returns new Promise
     */

    const catCodeLines = originCode.toString().match(/^.+$/gm)
        .map((v) => v.trimRight());

    catCodeLines.push('');
    console.log(catCodeLines);
    /**
     * catCodeLines have data like this
     *
     *
     [ '#include <stdio.h>',
     '#include <stdlib.h>',
     'int main():',
     '    for (int i = 0; i < 10; i++):',
     '        for (int j = 0; j < 10; j++):',
     '            print("%d times %d is %d \\n", i, j, i * j)',
     '    return 0' ]
     */
    let cCode = "";
    let codeStack = [];

    return new Promise((resolve, reject) => {
        try {
            catCodeLines.forEach((lineString, lineNumber) => {
                const spaceLevel = lineString.indexOf(lineString.trimLeft());
                const prevLine = codeStack[codeStack.length - 1];
                if (prevLine !== undefined) {
                    // check space level
                    if (spaceLevel % 4 !== 0) {
                        throw new TabSpaceError(`line ${lineNumber} has tab space ${spaceLevel}.`)
                    }
                    if (prevLine.spaceLevel < spaceLevel) {
                        if (spaceLevel - prevLine.spaceLevel !== 4) {
                            throw new TabSpaceDiffError(`line ${lineNumber} has ${spaceLevel}space (expected ${prevLine.spaceLevel + 4}).`)
                        }
                    }
                }
                codeStack.push({ lineNumber: lineNumber, spaceLevel: spaceLevel });
                const prev = codeStack[codeStack.length - 2];
                const curr = codeStack[codeStack.length - 1];

                if (prev !== undefined) {
                    if (curr.spaceLevel > prev.spaceLevel) {
                        // scope level ascended
                        if (lineString.trimLeft()[0] === "#") {
                            // import state
                            cCode += lineString + "\n";
                        } else if (lineString.trimRight().slice(-1) === ":") {
                            cCode += lineString.replace(":", " {") + "\n";
                        } else {
                            cCode += lineString  + ";\n";
                        }
                    } else if (curr.spaceLevel === prev.spaceLevel) {
                        // scope same level
                        if (lineString.trimLeft()[0] === "#") {
                            cCode += lineString + "\n";
                        } else if (lineString.trimRight().slice(-1) === ":") {
                            cCode += lineString.replace(":", " {") + "\n";
                        } else {
                            cCode += lineString  + ";\n";
                        }
                    } else {
                        // scope level descended
                        for (let i = prev.spaceLevel; i > curr.spaceLevel; i -= 4) {
                            cCode += " ".repeat(i-4) + "}\n";
                        }
                        if (lineString.trimLeft()[0] === "#") {
                            // import state
                            cCode += lineString + "\n";
                        } else if (lineString.trimRight().slice(-1) === ":") {
                            cCode += lineString.replace(":", " {") + "\n";
                        } else if (lineString.trim() === "") {
                            cCode += lineString  + "\n";
                        } else {
                            cCode += lineString + ";\n";
                        }
                    }
                } else {
                    // if first line
                    if (lineString.trimRight()[0] === "#") {
                        cCode += lineString + "\n";
                    }
                }
            });

            console.log(cCode);
            resolve(cCode);
        }
        catch (e){
            reject(e.stack)
        }
    });
}
