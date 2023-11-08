import http from 'http';
import { getItems, getItemsById, postItem, deleteItem, putItem } from './items.js';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const urlParts = url.split('/');
  
  // Routing for '/items' and '/items/:id'
  if (url.startsWith('/items')) {
    if (urlParts.length === 2 && method === 'GET') {
      getItems(res);
      return;
    } else if (urlParts.length === 3 && method === 'GET') {
      const id = urlParts[2];
      getItemsById(res, id);
      return;
    } else if (urlParts.length === 2 && method === 'POST') {
      postItem(req, res);
      return;
    } else if (urlParts.length === 3 && method === 'DELETE') {
      const id = urlParts[2];
      deleteItem(req, res, id);
      return;
    } else if (urlParts.length === 3 && method === 'PUT') {
      const id = urlParts[2];
      putItem(req, res, id);
      return;
    }
  }

  // Default 404 for non-existing resources
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Resource not found' }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});