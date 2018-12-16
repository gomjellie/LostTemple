
module.exports = {
    cat2c: cat2c,
};

function cat2c(originCode) {
    /**
     * transpile .cat to .c
     *
     * returns new Promise
     */
    console.log(String(originCode));

    return new Promise((resolve, reject) => {
        try {
            resolve(String(originCode));
        }
        catch (e){
            reject(e)
        }
    });
}
