require('dotenv').config();

const express=require('express');
const app=express();

require('./data/mongo');

app.use(express.json());
const jwt=require('jsonwebtoken');

app.get("/profile",(req,res)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader)
    {
        return res.status(401).json({message:"Token missing"});
    }
    const token=authHeader.split(' ')[1];
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        res.json({
            message:"Access Gran",
            user:decoded
        });
    }
    catch(err)
    {
        res.status(403).json({message:"Invalid token"});
    }
});


const authRoute=require('./Router/auth.route');
app.use('/auth',authRoute);

const studentRoute=require('./Router/route');
app.use('/student',studentRoute);

app.listen(5000,()=>
{
    console.log('Server is running on port http://localhost:5000');
});