import { create, defaults } from 'json-server';
import bodyParser from 'json-server/lib/server/bodyParser';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const server = create();
const adapter = new FileSync('./src/server/db.json'); // Adjust path to your JSON file
const db = low(adapter);
const middlewares = defaults();

server.use(middlewares);
server.use(bodyParser);

// Custom route for user registration
server.post('/register', (req, res) => {
  const { email, password } = req.body;
  const users = db.get('users');
  const existingUser = users.find({ email }).value();

  if (existingUser) {
    res.status(400).json({ error: 'Email already exists' });
  } else {
    const newUser = { id: users.length + 1, email, password }; // Adjust user schema as needed
    users.push(newUser).write();
    res.json({ message: 'User registered successfully' });
  }
});

// Custom route for user login
server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = db.get('users').find({ email, password }).value();

  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Example: Adding a new endpoint for product listings
server.get('/products', (req, res) => {
  const products = db.get('products').value(); // Adjust according to your schema
  res.json(products);
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
