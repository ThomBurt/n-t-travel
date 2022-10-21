const express = require('express');
const router = express.Router();
const fs = require('fs');


// API ROUTES
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/tours.json`)
  );
  //API get for tours
  const getAllTours = (req, res) => {
    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: tours.length,
      data: {
        tours: tours
      }
    })
  }
  const getTour = (req, res) => {
  
    //convert id string to a number
    const id = req.params.id * 1;
  
    if(id > tours.length) {
      return res.status(404).json({
        status: 'fail',
        message: 'invalid ID'
      })
    }
  
    // find id
    const tour = tours.find(el => el.id === id);
  
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    })
  }
  const createTour = (req, res) => {
    //console.log(req.body);
  
    const newID = tours[tours.length -1].id + 1;
    const newTour = Object.assign({id: newID}, req.body)
  
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/tours.json`,  JSON.stringify(tours), err => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      })
    });
  }
  const updateTour = (req, res) => {
    if (req.params.id * 1 > tour.length) {
      res.status(404).json({
        status: "fail",
        message: "Invalid ID"
      })  
    }
    res.status(200).json({
      status: "success",
      data: {
        tour: '<Updated Tour Here...>'
      }
    })
  }
  const deleteTour = (req, res) => {
    if (req.params.id * 1 > tour.length) {
      res.status(404).json({
        status: "fail",
        message: "Invalid ID"
      })  
    }
    res.status(204).json({
      status: "success",
      data: null
    })
  }


router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;