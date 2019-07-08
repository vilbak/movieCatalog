const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../server/modules/user/data/model/user')
const uri = require('../config/default')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = uri.secretOrKey

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwtPayload, done) => {
      User.findById(jwtPayload.id)
        .then(user => {
          // Optimise
          if (user) {
            return done(null, user)
          }

          return done(null, false)
        })
        .catch(err => console.log(err))
    })
  )
}
