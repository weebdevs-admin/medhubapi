let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// courseinformation Model
let courseInformationSchema = require('../models/courseinformation')

// CREATE courseinformation
router.route('/create-courseinformation').post((req, res, next) => {
  courseInformationSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ courseinformations
router.route('/').get((req, res) => {
  courseInformationSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single courseinformation
router.route('/edit-courseinformation/:id').get((req, res) => {
  courseInformationSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update courseinformation
router.route('/update-courseinformation/:id').put((req, res, next) => {
  courseInformationSchema.findByIdAndUpdate(
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
        console.log('courseinformation updated successfully !')
      }
    },
  )
})

// Delete courseinformation
router.route('/delete-courseinformation/:id').delete((req, res, next) => {
  courseInformationSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
