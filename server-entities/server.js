const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let entities = [
  { id: 1, name: 'Entity1', coordinate: [1,2], labels: ['labelA', 'labelB'] },
  { id: 2, name: 'Entity2', coordinate: [3,4], labels: ['labelC', 'labelD', 'labelF'] },
  { id: 3, name: 'Entity3', coordinate: [-2,0], labels: ['labelE', 'labelF', 'labelB'] },
  { id: 4, name: 'Entity4', coordinate: [1,1], labels: ['labelE', 'labelF'] },
  { id: 5, name: 'Entity5', coordinate: [3,-6], labels: ['labelG', 'labelE', 'labelB'] },
  { id: 6, name: 'Entity6', coordinate: [2,2], labels: ['labelG', 'labelF'] }
];

app.get('/entities', (req, res) => {
  console.log(222);
  res.json(entities);
});
app.get('/entities/:id', (req, res) => {
  const entityId = parseInt(req.params.id);
  const entitie = entities.find(entity=>entity.id === entityId)
  res.json(entitie);
});

app.post('/entities', (req, res) => {
  const newEntity = req.body;
  newEntity.id = entities.length + Math.floor(Math.random()*100000);
  entities.push(newEntity);
  res.status(201).json(newEntity);
});

app.put('/entities/:id', (req, res) => {
  const entityId = parseInt(req.params.id);
  const updatedEntity = req.body;
  entities = entities.map(entity => {
    if (entity.id === entityId) {
      return { id: entityId, ...updatedEntity };
    }
    return entity;
  });

  res.json(updatedEntity);
});

app.delete('/entities/:id', (req, res) => {
  const entityId = parseInt(req.params.id);
  entities = entities.filter(entity => entity.id !== entityId);
  res.sendStatus(204);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});