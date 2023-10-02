const { rateLimit } = require('express-rate-limit')

const callLimitedRoute = rateLimit({
	windowMs: 60 * 1000,  // 1-minute window
	limit: 5, // Limit each IP to 5 requests per `window` (here, per hour)
	message:'Too many accounts created from this IP, please try again after an hour',
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})


module.exports=callLimitedRoute