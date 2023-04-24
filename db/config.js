const mongoose = require('mongoose');


const dbConnnection = async() => {
    try{
        await mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } );
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicialziar la BD');
    }
}

module.exports = {
    dbConnnection
}