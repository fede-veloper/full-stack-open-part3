require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const Person = require('./models/person');
const person = require('./models/person');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(express.static('build'));
app.use(morgan(':method :url :status ms - :response-time :body'));

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123457",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
];

morgan.token('body', (req, res) => JSON.stringify(req.body));

app.get('/api/persons', (req, res) => {
  Person.find({})
    .then(persons => res.json(persons));
});

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id)
    .then(person => res.json(person))
    .catch(error => console.log('error ' + error));
});

app.get('/info', (req, res) => {
  res.send('<p>Phonebook has info for ' + persons.length + ' people</p>' + '<p>' + new Date() + '<p>');
});

app.delete('/api/persons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = persons.find(person => person.id === id);

  if (!person)
    return res.status(404).end();
  persons = persons.filter(person => person.id !== id);
  res.send(person);
});

app.post('/api/persons', (req, res) => {
  const body = req.body;
  // const personExists = persons.find(person => person.name === body.name);

  if (!body.name || !body.number) 
    return res.status(400).json({error: 'no empty fields'});
  /* if(personExists) 
    return res.status(400).json({error: 'name must be unique'}); */

  const person = new Person({
    name: body.name, 
    number: body.number
  });

  person.save().then(result => console.log('person ' + result.name + ' saved in MongoDB'));
  res.send(person);
});

const unkownEntry = (req, res) => {
  res.status(400).send({ error: "unknown endpoint" });
}

app.use(unkownEntry);

app.listen(PORT, () => {
  console.log('Server running');
});