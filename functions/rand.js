const randSeeded = {

  int: (max, min, seed) => {
    
    if (!max && !min) return Math.floor(seed * 2)
    
    max = max || 0;
    min = min || 0;

    nMax = Math.max(max, min);
    nMin = Math.min(max, min);

    const range = nMax - nMin + 1;

    return nMin + Math.floor(seed * range);

  }

}

const rand = {

  int: (max, min) => {
    randSeeded.int(max, min, Math.random())
  }

}

module.exports = {rand, randSeeded};