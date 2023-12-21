const express = require('express');
const multer = require('multer');
const router = express.Router();

// Configure Multer
const upload = multer({ dest: 'uploads/' }); 

// POST route for uploading a file
router.post('/media', upload.single('file'), (req, res) => {
    // req.file contains file information
    // Add your logic to handle the uploaded file here
    res.send('File uploaded successfully');
});

module.exports = router;
