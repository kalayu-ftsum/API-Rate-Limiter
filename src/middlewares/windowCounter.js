const router = require('express').Router()

const WindowCounter = require('../utils/windowCounter')


const threshold = 5;   // Maximum requests allowed in the window
const windowSize = 60; // 1-minute window
const windowCounter = new WindowCounter(threshold, windowSize)


module.exports = (req, res, next) => {
    try {
        const isThresholdReached = windowCounter.updateWindow()
        if (isThresholdReached) {
            return res.status(429).send('Threshold reached!')
        }
        next()
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error.')
    }
}