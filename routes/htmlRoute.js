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
    res.sendFile(path.join(__dirname, '../public/contactUs.html'));
  });

router.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/services.html'));
  });

  router.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/travelBlog.html'));
  });
  router.get('/europe', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/europe.html'));
  });
  router.get('/north-america', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/northAmerica.html'));
  });
  router.get('/central-and-south-america', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/centralAmerica.html'));
  });
  router.get('/oceania', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/oceania.html'));
  });

  router.get('/careers', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/jobs.html'));
  });

  router.get('/newsletter', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/newsletter.html'));
  });

  router.get('/travel-packing-list', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/travelPackingList.html'));
  });
  router.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/faq.html'));
  });

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });


module.exports = router;