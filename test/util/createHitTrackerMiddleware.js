
module.exports = createHitTrackerMiddleware

function createHitTrackerMiddleware () {
  const hitTracker = {}
  const middleware = (req, _res, next, _end) => {
    // mark hit for method
    const hitsForMethod = hitTracker[req.method] || []
    hitsForMethod.push(req)
    hitTracker[req.method] = hitsForMethod
    // continue
    next()
  }
  middleware.getHits = (method) => hitTracker[method] || []
  return middleware
}
