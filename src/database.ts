import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/faztjwt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));