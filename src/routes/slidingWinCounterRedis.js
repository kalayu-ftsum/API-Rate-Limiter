const router = require('express').Router()

const slidingWinCounterRedisMiddleware = require('../middlewares/slidingWinCounterRedis')

router.use(slidingWinCounterRedisMiddleware)

router.get('/', (req, res) => {
    try {
        res.send('Sliding Window Counter using Redis.')
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error.')
    }
})

module.exports = router