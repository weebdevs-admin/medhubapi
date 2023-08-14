let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// userinfo Model
let userInfoSchema = require('../models/UserInfo')

// CREATE userinfo
router.route('/create-userinfo').post((req, res, next) => {
  userInfoSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ userinfos
router.route('/').get((req, res) => {
  userInfoSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single userinfo
router.route('/edit-userinfo/:id').get((req, res) => {
  userInfoSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update userinfo
router.route('/update-userinfo/:id').put((req, res, next) => {
  userInfoSchema.findByIdAndUpdate(
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
        console.log('userinfo updated successfully !')
      }
    },
  )
})

// Delete userinfo
router.route('/delete-userinfo/:id').delete((req, res, next) => {
  userInfoSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
