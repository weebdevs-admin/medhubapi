let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// coursesection Model
let couseSectionSchema = require('../models/coursesection')

// CREATE coursesection
router.route('/create-coursesection').post((req, res, next) => {
  couseSectionSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ coursesections
router.route('/').get((req, res) => {
  couseSectionSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single coursesection
router.route('/edit-coursesection/:id').get((req, res) => {
  couseSectionSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update coursesection
router.route('/update-coursesection/:id').put((req, res, next) => {
  couseSectionSchema.findByIdAndUpdate(
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
        console.log('coursesection updated successfully !')
      }
    },
  )
})

// Delete coursesection
router.route('/delete-coursesection/:id').delete((req, res, next) => {
  couseSectionSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
