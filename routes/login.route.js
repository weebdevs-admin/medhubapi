let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// login Model
let loginSchema = require('../models/Login')

// CREATE login
router.route('/create-login').post((req, res, next) => {
  loginSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ logins
router.route('/').get((req, res) => {
  loginSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single login
router.route('/edit-login/:id').get((req, res) => {
  loginSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update login
router.route('/update-login/:id').put((req, res, next) => {
  loginSchema.findByIdAndUpdate(
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
        console.log('login updated successfully !')
      }
    },
  )
})

// Delete login
router.route('/delete-login/:id').delete((req, res, next) => {
  loginSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
