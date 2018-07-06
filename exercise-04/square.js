// Archivo `square.js`

const square = (num) => {
  /* Acá va tu código */
  if(num === undefined || typeof num === 'string'){
    return 'Error';
  }
  return num * num;
  //Math.pow (número, exponente)
  //Math.pow (num,2)
};

module.exports = square;
