let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// coursevideo Model
let courseVideoSchema = require('../models/CourseVideo')

// CREATE coursevideo
router.route('/create-coursevideo').post((req, res, next) => {
  courseVideoSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ coursevideos
router.route('/').get((req, res) => {
  courseVideoSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single coursevideo
router.route('/edit-coursevideo/:id').get((req, res) => {
  courseVideoSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update coursevideo
router.route('/update-coursevideo/:id').put((req, res, next) => {
  courseVideoSchema.findByIdAndUpdate(
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
        console.log('coursevideo updated successfully !')
      }
    },
  )
})

// Delete coursevideo
router.route('/delete-coursevideo/:id').delete((req, res, next) => {
  courseVideoSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
