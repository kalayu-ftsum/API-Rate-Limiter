const router = require('express').Router()

const rateLimiterMiddleware = require('../middlewares/rateLimiterPackage');


router.use(rateLimiterMiddleware);

router.get('/', (req, res) => {
    try {
        res.send('Don\'t overuse me')
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error.')
    }
});


module.exports = router