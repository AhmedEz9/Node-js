const express = require('express');
const app = express();

// Set Pug as the view engine for rendering HTML pages
app.set('view engine', 'pug');

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'media' directory
app.use('/media', express.static('media'));

// Render the index page at the root route
app.get('/', (req, res) => {
    res.render('index', { title: 'API Information', message: 'Welcome to the Media Sharing REST API' });
});

// Mock data for media items
let mediaItems = [
    {
        "media_id": 9632,
        "filename": "ffd8.jpg",
        "filesize": 887574,
        "title": "Favorite drink",
        "description": "",
        "user_id": 1606,
        "media_type": "image/jpeg",
        "created_at": "2023-10-16T19:00:09.000Z"
      },
      {
        "media_id": 9626,
        "filename": "dbbd.jpg",
        "filesize": 60703,
        "title": "Miika",
        "description": "My Photo",
        "user_id": 3671,
        "media_type": "image/jpeg",
        "created_at": "2023-10-13T12:14:26.000Z"
      },
      {
        "media_id": 9625,
        "filename": "2f9b.jpg",
        "filesize": 30635,
        "title": "Aksux",
        "description": "friends",
        "user_id": 260,
        "media_type": "image/jpeg",
        "created_at": "2023-10-12T20:03:08.000Z"
      },
      {
        "media_id": 9592,
        "filename": "f504.jpg",
        "filesize": 48975,
        "title": "Desert",
        "description": "",
        "user_id": 3609,
        "media_type": "image/jpeg",
        "created_at": "2023-10-12T06:59:05.000Z"
      },
      {
        "media_id": 9590,
        "filename": "60ac.jpg",
        "filesize": 23829,
        "title": "Basement",
        "description": "Light setup in basement",
        "user_id": 305,
        "media_type": "image/jpeg",
        "created_at": "2023-10-12T06:56:41.000Z"
      }
];

// Mock data for users
let users = [
    {
        "user_id": 260,
        "username": "VCHar",
        "password": "********",
        "email": "vchar@example.com",
        "user_level_id": 1,
        "created_at": "2020-09-12T06:56:41.000Z"
      },
      {
        "user_id": 305,
        "username": "Donatello",
        "password": "********",
        "email": "dona@example.com",
        "user_level_id": 1,
        "created_at": "2021-12-11T06:00:41.000Z"
      },
      {
        "user_id": 3609,
        "username": "Anon5468",
        "password": "********",
        "email": "x58df@example.com",
        "user_level_id": 3,
        "created_at": "2023-04-02T05:56:41.000Z"
      }
];

// Media items API endpoints
app.get('/api/media', (req, res) => {
    res.status(200).json(mediaItems);
});

app.get('/api/media/:id', (req, res) => {
    const media = mediaItems.find(m => m.media_id === parseInt(req.params.id));
    if (!media) {
        return res.status(404).send('Media item not found');
    }
    res.status(200).json(media);
});

app.post('/api/media', (req, res) => {
    const newMedia = {
        media_id: Date.now(), 
        ...req.body
    };
    mediaItems.push(newMedia);
    res.status(201).json(newMedia);
});

app.put('/api/media/:id', (req, res) => {
    let media = mediaItems.find(m => m.media_id === parseInt(req.params.id));
    if (!media) {
        return res.status(404).send('Media item not found');
    }
    Object.assign(media, req.body);
    res.status(200).json(media);
});

app.delete('/api/media/:id', (req, res) => {
    mediaItems = mediaItems.filter(m => m.media_id !== parseInt(req.params.id));
    res.status(204).send();
});

// Users API endpoints
app.get('/api/user', (req, res) => {
    res.status(200).json(users);
});

app.get('/api/user/:id', (req, res) => {
    const user = users.find(u => u.user_id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.status(200).json(user);
});

app.post('/api/user', (req, res) => {
    const newUser = {
        user_id: Date.now(), 
        ...req.body
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/api/user/:id', (req, res) => {
    let user = users.find(u => u.user_id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    Object.assign(user, req.body);
    res.status(200).json(user);
});

app.delete('/api/user/:id', (req, res) => {
    users = users.filter(u => u.user_id !== parseInt(req.params.id));
    res.status(204).send();
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
