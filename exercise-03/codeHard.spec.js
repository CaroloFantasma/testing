// Archivo `codeHard.spec.js`:

const codeHard = require('./codeHard');

console.log('debería retornar "CodeHard" si el número es divisible entre 5 y 3');
if (codeHard(15) === 'CodeHard') {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería retornar "Code" si el número es divisible entre 3');
if (codeHard(18) === 'Code') {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería retornar "Hard" si el número es divisible entre 5');
if (codeHard(10) === 'Hard') {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería retornar el número si NO es divisible entre 5 o 3');
if (codeHard(1) === 1) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería retornar "Error" si el parámetro no existe');
if (codeHard() === "Error") {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}