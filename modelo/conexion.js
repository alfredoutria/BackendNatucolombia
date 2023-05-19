const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Base de Datos Conectada ' + process.env.MONGODB_URI)
}).catch(err =>{
    console.log(err)
})