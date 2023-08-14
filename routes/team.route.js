let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// team Model
let teamSchema = require('../models/Team')

// CREATE team
router.route('/create-team').post((req, res, next) => {
  teamSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ teams
router.route('/').get((req, res) => {
  teamSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single team
router.route('/edit-team/:id').get((req, res) => {
  teamSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update team
router.route('/update-team/:id').put((req, res, next) => {
  teamSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('team updated successfully !')
      }
    },
  )
})

// Delete team
router.route('/delete-team/:id').delete((req, res, next) => {
  teamSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
