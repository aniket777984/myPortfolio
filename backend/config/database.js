const mongoose =  require("mongoose");

const connectDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URI).then((c)=>{
        console.log(`Mongodb connected to : ${c.connection.host} `)
    }).catch((error)=>{
        console.log(error);
    })
}

module.exports = connectDatabase;