const router = require('express').Router()

const windowCounterMiddleware = require('../middlewares/windowCounter')

router.use(windowCounterMiddleware)


router.get('/limited', (req, res) => {
    try {
        res.send('Window counter algorithm')
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error.')
    }
})

module.exports = router