let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// courselist Model
let courseListSchema = require('../models/courselist')

// CREATE courselist
router.route('/create-courselist').post((req, res, next) => {
  courseListSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ courselists
router.route('/').get((req, res) => {
  courseListSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single courselist
router.route('/edit-courselist/:id').get((req, res) => {
  courseListSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update courselist
router.route('/update-courselist/:id').put((req, res, next) => {
  courseListSchema.findByIdAndUpdate(
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
        console.log('courselist updated successfully !')
      }
    },
  )
})

// Delete courselist
router.route('/delete-courselist/:id').delete((req, res, next) => {
  courseListSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
