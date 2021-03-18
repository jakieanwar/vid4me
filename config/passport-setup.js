const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3100/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      //register user in the db
      return done(null, profile);
    }
  )
);
