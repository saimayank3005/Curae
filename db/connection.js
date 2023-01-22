const mongoose = require('mongoose');

const DB = 'mongodb+srv://mayank:1234@cluster0.wk3eddc.mongodb.net/user-db?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);
mongoose.connect(DB).then(() => {
    console.log('Connection Successfull');
}).catch((err) => {
    console.log(err);
})