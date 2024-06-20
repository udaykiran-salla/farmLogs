const express= require('express');
const mongoose = require('mongoose')
const dbconfig = require('./config/dbconfig')
const userRoute = require('./routes/userRoutes')
const logRoute = require("./routes/logroutes");
const serviceRoute = require("./routes/serviceRoutes")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// app.post('/test-url', (req, res) => {
//     console.log(req.body)
//     return res.send("went well")
// });


mongoose.connect(dbconfig.url,{  
        useNewUrlParser: true,
        useUnifiedTopology: true
      
}).then(console.log("db connected sucessfully"))
.catch(err=>{
    console.log("Cannot connect to the database!", err);
    process.exit();
})

app.use('/api/user',userRoute)
app.use('/api/logs',logRoute)
app.use('/api/service', serviceRoute)

app.get('/',(req,res)=>{
    res.send({'message':"welcome"})
})


app.listen(8080,()=>{
    console.log("server is running at port 8080")
})
