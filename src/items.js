const items = [
  { id: 5, name: 'porkkana' },
  { id: 6, name: 'omena' },
  { id: 19, name: 'appelsiini' },
];

const getItems = (res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(items));
};

const getItemsById = (res, id) => {
  const item = items.find((element) => element.id == id);
  if (item) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(item));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end('{"message": "Item not found."}');
  }
};

const postItem = (req, res) => {
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    let parsedBody;
    try {
      parsedBody = JSON.parse(body);
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end('{"message": "Invalid JSON"}');
      return;
    }

    if (!parsedBody.name) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end('{"message": "Missing item name."}');
      return;
    }

    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem = { id: newId, name: parsedBody.name };
    items.push(newItem);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newItem));
  });
};

const deleteItem = (req, res, id) => {
  const index = items.findIndex((item) => item.id == id);
  if (index !== -1) {
    items.splice(index, 1);
    res.writeHead(204);
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end('{"message": "Item not found."}');
  }
};

const putItem = (req, res, id) => {
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    let parsedBody;
    try {
      parsedBody = JSON.parse(body);
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end('{"message": "Invalid JSON"}');
      return;
    }

    const index = items.findIndex((item) => item.id == id);
    if (index !== -1) {
      const updatedItem = { ...items[index], ...parsedBody };
      items[index] = updatedItem;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(updatedItem));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end('{"message": "Item not found."}');
    }
  });
};

export { getItems, getItemsById, postItem, deleteItem, putItem };