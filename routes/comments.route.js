let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// comment Model
let commentSchema = require('../models/Comments')

// CREATE comment
router.route('/create-comment').post((req, res, next) => {
  commentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ comments
router.route('/').get((req, res) => {
  commentSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single comment
router.route('/edit-comment/:id').get((req, res) => {
  commentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update comment
router.route('/update-comment/:id').put((req, res, next) => {
  commentSchema.findByIdAndUpdate(
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
        console.log('comment updated successfully !')
      }
    },
  )
})

// Delete comment
router.route('/delete-comment/:id').delete((req, res, next) => {
  commentSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
