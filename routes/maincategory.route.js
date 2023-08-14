let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// maincategory Model
let mainCategorySchema = require('../models/MainCategory')

// CREATE maincategory
router.route('/create-maincategory').post((req, res, next) => {
  mainCategorySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ maincategorys
router.route('/').get((req, res) => {
  mainCategorySchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single maincategory
router.route('/edit-maincategory/:id').get((req, res) => {
  mainCategorySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update maincategory
router.route('/update-maincategory/:id').put((req, res, next) => {
  mainCategorySchema.findByIdAndUpdate(
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
        console.log('maincategory updated successfully !')
      }
    },
  )
})

// Delete maincategory
router.route('/delete-maincategory/:id').delete((req, res, next) => {
  mainCategorySchema.findByIdAndRemove(req.params.id, (error, data) => {
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
