import express from 'express';
import { router } from './routes/gymRoutes';

const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Middleware setup
app.use(express.json());
app.use('/api/', router)


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


