let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// courseabaut Model
let courseAbautSchema = require('../models/courseabaut')

// CREATE courseabaut
router.route('/create-courseabaut').post((req, res, next) => {
  courseAbautSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ courseabauts
router.route('/').get((req, res) => {
  courseAbautSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single courseabaut
router.route('/edit-courseabaut/:id').get((req, res) => {
  courseAbautSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update courseabaut
router.route('/update-courseabaut/:id').put((req, res, next) => {
  courseAbautSchema.findByIdAndUpdate(
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
        console.log('courseabaut updated successfully !')
      }
    },
  )
})

// Delete courseabaut
router.route('/delete-courseabaut/:id').delete((req, res, next) => {
  courseAbautSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
