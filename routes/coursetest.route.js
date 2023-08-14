let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// coursetest Model
let courseTestRoute = require('../models/coursetest')

// CREATE coursetest
router.route('/create-coursetest').post((req, res, next) => {
  courseTestRoute.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ coursetests
router.route('/').get((req, res) => {
  courseTestRoute.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single coursetest
router.route('/edit-coursetest/:id').get((req, res) => {
  courseTestRoute.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update coursetest
router.route('/update-coursetest/:id').put((req, res, next) => {
  courseTestRoute.findByIdAndUpdate(
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
        console.log('coursetest updated successfully !')
      }
    },
  )
})

// Delete coursetest
router.route('/delete-coursetest/:id').delete((req, res, next) => {
  courseTestRoute.findByIdAndRemove(req.params.id, (error, data) => {
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
