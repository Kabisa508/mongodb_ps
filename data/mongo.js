const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://kabisap:Kabi%402005@clouddemo2.lcbcdcp.mongodb.net/clouddemoatlas2')
.then(()=>
    {
        console.log('MongoDB connected');
    })
.catch((err)=>
    {
        console.log('MongoDB connection error:',err);
    });
module.exports=mongoose;