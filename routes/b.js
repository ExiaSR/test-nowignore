const { Router } = require('express')

const router = Router();

router.get('/', (req, res) => {
  res.send('Howdy! b')
})

module.exports = router