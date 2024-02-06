const express = require('express');
// const {app}=require(./express)

const app = express();
//post,put contains->body,so it should be in that fromat

// app.use()
app.use(express.json())


//routers
//routs contaion api,to find api we should search the routers
// app.get('/test',(req,res)=>{ //test is api name
//     res.send('Hello')
// })

//app level middleware
//FILTER
// app.use((req,res,next)=>{

//     if(req.headers.user_name=='a')//username password aa accpeted
//     {
//         next()

//     }
//     else{
//     console.log('this hasbeen hit')
// res.status(404).send()}
//     // next()// only after this next function will be called
// })


//middle ware concept
app.get('/test',(req,res,next)=>{
    console.log('f1')
    // res.status(200).send('f1')
    next();
    // res.end();
},(req,res,next)=>{
console.log('f2')
// res.status(400).send('f2')
// next();
// res.end();
})

// app.get('/v1/expense/transaction',(req,res)=>{ //test is api name
//     if(!req.query.expenseId)
//     {
//         res.status(204).send({'error':'expenseId undefined'}) //just summa 204
//         return;
//     }
//     if(req.query.expenseId == 1)
//     {
//         res.status(200).send({
//             'expenseId':1,
//             'expenseType':'Fashion'
//         })
//         console.log('EXPENSE ID=1')
//     }
//     else

//     {
//         res.status(400).send({'error':'expense'})
//     }
//     // res.send('Hello')
// })


// app.use((req,res,next)=>{
//     // console.log('this hasbeen hit')
//     next()// only after this next function will be called
//         // console.log('this hasbeen hit')

// })




//post
app.post('/t1',(req,res)=>{
    console.log(req.body)
    res.end();
})

app.listen(8040)



// module.exports=app