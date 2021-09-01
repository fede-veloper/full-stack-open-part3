if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

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

morgan.token('body', (req, res) => JSON.stringify(req.body));

app.get('/api/persons', (req, res) => {
  Person.find({})
    .then(persons => res.json(persons));
});

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => res.json(person))
    .catch(error => next(error));
});

app.get('/info', (req, res) => {
  Person.find({}).then(persons => {
    res.send('<p>Phonebook has info for ' + persons.length + ' people</p>' + '<p>' + new Date() + '<p>');
  });
});

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(response => res.send(response))
    .catch(error => next(error));
});

app.post('/api/persons', (req, res, next) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({error: 'no empty fields'});
  }

  const person = new Person({
    name: body.name, 
    number: body.number
  });

  person.save()
    .then(result => {
      console.log('person ' + result.name + ' saved in MongoDB');
      res.send(result);
    })
    .catch(error => next(error));
});

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body;
  const person = {
    name: body.name, 
    number: body.number
  }

  const opts = {
    new: true,
    runValidators: true, 
    context: 'query'
  }

  Person.findByIdAndUpdate(req.params.id, person, opts)
    .then(result => res.send(result))
    .catch(error => next(error));
});

const unkownEntry = (req, res) => {
  res.status(400).send({ error: "unknown endpoint" });
}

const handlerError = (error, req, res, next) => {
  console.log(error.message);
  
  if (error.name === 'ValidationError') {
    res.status(400).send(error.message);
  } else {
    res.status(400).send({ error: 'error' });
  }
  next(error);
};

app.use(handlerError);
app.use(unkownEntry);

app.listen(PORT, () => {
  console.log('Server running on PORT ' + PORT);
});