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

  router.get('/destinations', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/travelBlog.html'));
  });
  router.get('/itineraries', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Blog/blogMainPage.html'));
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
  router.get('/africa', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/africa.html'));
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
  router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/loginSignup.html'));
  });


  //Blog Routes
  router.get('/itineraries/amalfi-coast', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Blog/amalfiBlog.html'));
  });
  router.get('/itineraries/croatia', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Blog/croatiaBlog.html'));
  });
  router.get('/itineraries/72-hours-in-Barcelona', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Blog/72hoursBarcelona.html'));
  });
  router.get('/itineraries/mostar-bosnia', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Blog/mostar.html'));
  });
  router.get('/itineraries/courtney-and-matt-guillot-trip', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Blog/courtAndMatt.html'));
  });
  router.get('/international-phone-guide', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Blog/phoneGuide.html'));
  });
  router.get('/itineraries/72-hours-in-edinburgh', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Blog/3daysEdinburgh.html'));
  });





router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });


module.exports = router;