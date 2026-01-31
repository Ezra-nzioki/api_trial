const cors=require('cors')
const express=require('express')
const app=express()

//middlewares
app.use(express.json())
app.use(cors)

//routes
app.get('/',(req,res)=>{
    res.send('hello from backend')
})

app.get('/products',(req,res)=>{
    res.json(
        [
            {
                id:1,
                name:"mummy jeans"
            },
            {
                id: 2,
                name: "buggy jeans"
            }

        ]
    )
})

//app.post('/products',(req,res)={


//})

//starting server
app.listen(3000,()=>{
    console.log(`server running on port 3000`)
})