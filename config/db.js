const mongoose = require('mongoose');

const connetToDb = async ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`Connected To ${conn.Connection.host}`);
    })
    .catch((err)=>{
        console.log("Error connecting to DB", err);
        process.exit(1)
    })
}

module.exports=connetToDb;