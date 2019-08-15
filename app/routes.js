const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/juggling-balls-answer', function (req, res) {

  //Make a variable and give it the value from juggling-balls
  var jugglingBalls = req.session.data['juggling-balls']

  //Check whether the variable matches a condition
  if (jugglingBalls == "3 or more") {
    //Send user to next page
    res.redirect('/juggling-trick')
  } else {
    res.redirect('/ineligible')
  }
})

router.post('/juggling-objects-answer', function (req, res) {

  //Make a variable and give it the value from juggling-balls
  var jugglingObjects = req.session.data['juggling-objects']
console.log(jugglingObjects)
  //Check whether the variable matches a condition
  if (jugglingObjects.includes("Fiery sticks")) {
    //Send user to next page
    res.redirect('/juggling-danger')
  } else {
    res.redirect('/check-your-answers')
  }
})
module.exports = router
