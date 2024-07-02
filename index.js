const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Handle GET request for the root URL
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// Sample in-memory data store
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

// Read all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Read a single item by ID
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

// Create a new item
app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update an existing item by ID
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  item.name = req.body.name;
  res.json(item);
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).send('Item not found');
  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
