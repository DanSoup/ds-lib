const base64 = {

  toString: (number) => {

    if (number === undefined) throw new Error();

    const base64Chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/';
    let base64String = [];

    if (number === 0) return '0';

    while (number > 0) {

      const nextChar = number % 64;

      number = (number - nextChar) / 64;

      base64String.unshift(base64Chars[nextChar]);
    
    }



    return base64String.join('');
  }

}

module.exports = base64;