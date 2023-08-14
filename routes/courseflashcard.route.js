let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// courseFlashCardSchema Model
let courseFlashCardSchema = require('../models/courseflashcard')

// CREATE courseFlashCardSchema
router.route('/create-courseflashcard').post((req, res, next) => {
  courseFlashCardSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ courseFlashCardSchemas
router.route('/').get((req, res) => {
  courseFlashCardSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single courseFlashCardSchema
router.route('/edit-courseflashcard/:id').get((req, res) => {
  courseFlashCardSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update courseFlashCardSchema
router.route('/update-courseflashcard/:id').put((req, res, next) => {
  courseFlashCardSchema.findByIdAndUpdate(
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
        console.log('courseflashcard updated successfully !')
      }
    },
  )
})

// Delete courseFlashCardSchema
router.route('/delete-courseflashcard/:id').delete((req, res, next) => {
  courseFlashCardSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
