const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/', (req, res) => {
  const data = req.context

  const jobCtr = new controllers.job()
  jobCtr.get()
  .then(jobs => {
    data['jobs'] = jobs
    res.render('home', data)
  })
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

module.exports = router
