const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoute');
const { google } = require("googleapis");
require('dotenv').config();

const PORT = process.env.PORT || 3001;

// initializes express
const app = express();

// Sets up the static files
app.use(express.static(path.join(__dirname, 'public')));


// parse application/json
app.use(express.json());


//Sets up data parsing
app.use(express.urlencoded({ extended: true }));

// Set ups the HTML directory path for startup
app.get('/', async (req, res) => 
  res.sendFile(path.join(__dirname, '/public'))
);


//app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//Google Post

app.post("/", async (req, res) => {

  const { name, email } = req.body;

  const auth = new google.auth.GoogleAuth({
    // keyFile: "google-api-credentials.json",
    credentials: process.env,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1lO9_KnDG9QOzRy9soRiam1rDQpNdyrWFJf21OH9HLd4";

  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  // Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1",
  });

  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:B",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[name, email]],
    },
  });
  console.log("Email Signup successfully submitted, Thank you!")
  res.send("Successfully submitted! Thank you!");

//  function successMessage(){
//   let div = document.createElement("div");
//   div.setAttribute("col-md-12", "p2", "m-3", "bg-success", "rounded");
//   let heading4 = document.createElement("h4");
//   heading4.setAttribute("text-white");
//   heading4.innerHTML("Email Signup Successful")
//   div.appendChild(heading4)
//  }
//  successMessage();
});



// Listening on PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`),
  // console.log('Follow this link to get there http://localhost:3001/api/db 🚀')
);
