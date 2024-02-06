//different form of writing

const repl = require('node:repl');
const msg = 'message';
const replserv=repl.start('$ ')
replserv.context.add = (a,b)=>a+b;
replserv.context.k = msg;



// PS D:\projects\Mern stack training\Node js> node repl.js
// $ k
// 'message'
// $ add(3,4(
// ...
// ...
// ... 9+5))
// Uncaught TypeError: 4 is not a function
// $ add(3,9+3)
// 15
// $