const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('',(req,res)=>
{
    res.send("Hello World!");
});


app.post('/add',(req,res)=>
{
    const obj1={
        status: "",
        message: "",
        sum: 0,
    };
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    

    if(isNaN(num1) || isNaN(num2))
    {
        obj1.status="error";
        obj1.message="Invalid data type";
    }
    else{
        const result = num1+num2;
        if(num1 < -1000000 ||num2 < -1000000|| result < -1000000)
        {
            obj1.status="error";
        obj1.message="Underflow";
        } else if(num1 > 1000000 ||num2 > 1000000|| result > 1000000)
        {
            obj1.status="error";
            obj1.message="Overflow";
        } else {
            obj1.status="success";
            obj1.message="the sum of the given two numbers";
            obj1.sum = result;
        }
       
    }
    
    res.send(obj1);
});

app.post('/sub',(req,res)=>
{
    const obj1={
        status: "",
        message: "",
        sum: 0,
    };
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    

    if(isNaN(num1) || isNaN(num2))
    {
        obj1.status="error";
        obj1.message="Invalid data type";
    }
    else{
        const result = num1-num2;
        if(num1 < -1000000 ||num2 < -1000000|| result < -1000000)
        {
            obj1.status="error";
        obj1.message="Underflow";
        } else if(num1 > 1000000 ||num2 > 1000000|| result > 1000000)
        {
            obj1.status="error";
            obj1.message="Overflow";
        } else {
            obj1.status="success";
            obj1.message="the difference of the given two numbers";
            obj1.sum = result;
        }
       
    }
    
    res.send(obj1);
});
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;