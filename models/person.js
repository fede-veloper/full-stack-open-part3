const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
	.then(() => {console.log('connected to MongoDB')})
	.catch(error => {console.log('error ' + error)})

const personSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
		unique: true,
		minlength: 3
	},
	number: {
		type: String,
		require: true,
		minlength: 8
	},
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
}) 

module.exports = mongoose.model('Person', personSchema)