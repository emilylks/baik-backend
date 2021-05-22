//Import mongoose and schema
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/baik';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userSchema = new Schema({
  userID: {type: String, unique: true, required: true},
  name: String,
  checkIns: [{ sleepHours: Number, sleepQuality: Number, mood: Number, date: Date }],
});

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', userSchema);
