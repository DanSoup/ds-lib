const nand = (a, b) => {

  if (!a && !b) return true;
  if (a && !b) return true;
  if (!a && b) return true;
  if (a && b) return false;

};

module.exports = nand;