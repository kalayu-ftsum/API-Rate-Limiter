const router = require('express').Router()
const slidingWindowCounterMiddleware = require('../middlewares/slidingWindowCounter')

router.use(slidingWindowCounterMiddleware)

router.get('/', (req, res) => {
    try {
        res.send('Sliding Window Counter')
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error.')
    }
})

module.exports = router;