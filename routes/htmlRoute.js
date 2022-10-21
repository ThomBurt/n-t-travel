const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'));
  });

    //NEW ROUTES
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'));
  });

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contact.html'));
  });

router.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/services.html'));
  });

  router.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/services.html'));
  });

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });


module.exports = router;