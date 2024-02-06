
const EventEmitter = require('node:events')
//to give request at a time
const emiiter=new EventEmitter();
emiiter.on('new',(a,b)=>{ //new any name
    console.log('Event emitted',a,b)
})


emiiter.on('new',(a,b)=>{ //new any name
    console.log('Event emitted',1,2)
})



emiiter.once('hello',()=>{
    console.log('hello event emiited')
})

emiiter.on('error',(err)=>{
    console.log('whoops!there was an error')
})
emiiter.emit('error',new Error('whoops!'))
//only once captured
// emiiter.on('hello',()=>{
//     console.log('hello event emiited')
// })
emiiter.emit('new',1,2);
emiiter.emit('hello');

