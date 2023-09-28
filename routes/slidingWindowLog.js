const router = require('express').Router()
const slidingWindowMiddleware=require('../middlewares/slidingWindowLog')


router.use(slidingWindowMiddleware);

router.get('/', (req, res) => {
    res.send('Success!')
})


module.exports = router