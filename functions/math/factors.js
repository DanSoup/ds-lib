const factors = n => {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        if ((n / i) % 1 === 0) arr.push(i)
    }
    return arr;
}

module.exports = factors;