const mongoose = require('mongoose')

const password = process.argv[2]
const namePerson = process.argv[3]
const numberPerson = process.argv[4]

const url = 'mongodb+srv://root:'+password+'@db.jyke5.mongodb.net/db?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
	name: String,
	number: String
})

const Person = mongoose.model('Person', personSchema)

if (namePerson && numberPerson) {
	const person = new Person({
		name: namePerson,
		number: numberPerson
	})
    
	person.save().then(result => {
		console.log('added ' + result.name + ' number ' + result.number + ' to phonebook')
		mongoose.connection.close()
	}) 
} else {
	Person.find({}).then((result) => {
		console.log('phonebook: ')
		result.map((person) => {console.log(person.name + ' ' + person.number)})
		mongoose.connection.close()
	})
}