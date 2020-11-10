const express = require('express');

// require the Drone model here
const Dronemodel = require('../models/Dronemodel');
const { route } = require('../routes');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Dronemodel.find()
  .then((allTheDroneFromDB) => {
    console.log(allTheDroneFromDB);
    res.render('drones/list.hbs', { drones: allTheDroneFromDB});
});

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  console.log(req.body);
  Dronemodel.create(req.body)
    .then((data) => {
      console.log(data);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let id = req.params.id;
  Dronemodel.findById(id)
    .then((theDroneFound) => {
      res.render("drones/update-form.hbs", { drone: theDroneFound });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let id = req.params.id;
  let { name, propellers, maxSpeed } = req.body;
  Dronemodel.findByIdAndUpdate(id,  {
    name,
    propellers,
    maxSpeed
  }).then((updatedDrone) => {
      console.log("Updated");
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  let id = req.params.id;
  Dronemodel.findByIdAndDelete(id)
    .then(() => {
      console.log("deleted");
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
