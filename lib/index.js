
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

    const catCodeLines = originCode.toString().match(/^.+$/gm);
    /**
     * catCodeLines have data like this
     *
     * [ '#include <stdio.h>',
     *   'int main():',
     *   '    for (int i = 0; i < 10; i++):',
     *   '        for (int j = 0; j < 10; j++):',
     *   '            print("%d times %d is %d \\n", i, j, i * j)',
     *   '    return 0' ]
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
            });
            console.log(codeStack);
            resolve(cCode);
        }
        catch (e){
            reject(e.stack)
        }
    });
}
