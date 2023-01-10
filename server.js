const express = require('express');
const morgan = require('morgan');

const path = require('path');
const htmlRoutes = require('./routes/htmlRoute');
// const { google } = require("googleapis");
require('dotenv').config();
// const cors = require('cors');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const PORT = process.env.PORT || 3001;

// initializes express
const app = express();

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/* At the top, with other redirect methods before other routes */
//  COMMENT OUT FOR DEVELOPMENT



app.get('*',function(req,res,next){
  if(req.headers['x-forwarded-proto']!='https')
    res.redirect('https://nikiandthom.com'+req.url)
  else
    next() /* Continue to other routes if we're not redirecting */
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////

//1 MIDDLEWARE
//morgan is third party middleware that give your api request in the cnsolse, as well as how long it took to request, status code and size.
app.use(morgan('dev'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
})

///JSON middleware to use req.body
app.use(express.json());


// Sets up the static files
app.use(express.static(path.join(__dirname, 'public')));


// parse application/json
app.use(express.json());


// //TEST CODE FOR HTTP
// app.enable('trust proxy')
// app.use(function(request, response, next) {

//   if (process.env.NODE_ENV != 'development' && !request.secure) {
//      return response.redirect("https://" + request.headers.host + request.url);
//   }

//   next();
// })




//Sets up data parsing
app.use(express.urlencoded({ extended: true }));

// API ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);


// Set ups the HTML directory path for startup
app.get('/', async (req, res) => 
  res.sendFile(path.join(__dirname, '/public'))
);


//HTML ROUTES
app.use('/', htmlRoutes);








// Listening on PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`),
  // console.log('Follow this link to get there http://localhost:3001/api/db 🚀')
);
