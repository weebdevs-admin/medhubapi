let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// coursethema Model
let CourseThemeSchema = require('../models/coursethema')

// CREATE coursethema
router.route('/create-coursethema').post((req, res, next) => {
  CourseThemeSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ coursethemas
router.route('/').get((req, res) => {
  CourseThemeSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single coursethema
router.route('/edit-coursethema/:id').get((req, res) => {
  CourseThemeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update coursethema
router.route('/update-coursethema/:id').put((req, res, next) => {
  CourseThemeSchema.findByIdAndUpdate(
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
        console.log('coursethema updated successfully !')
      }
    },
  )
})

// Delete coursethema
router.route('/delete-coursethema/:id').delete((req, res, next) => {
  CourseThemeSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
