require('dotenv').config();

const nom = process.env.MY_NAME
const ville = process.env.MY_CITY
const langue = process.env.MY_LANGUAGE

console.log(`I am ${nom}, wilder in ${ville}, and I love ${langue}`)
