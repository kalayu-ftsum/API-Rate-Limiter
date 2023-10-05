const router = require('express').Router()
const slidingWindowMiddleware = require('../middlewares/slidingWindowLog')


router.use(slidingWindowMiddleware);

router.get('/', (req, res) => {
    try {
        res.send('Success!')
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error.')
    }
})


module.exports = router