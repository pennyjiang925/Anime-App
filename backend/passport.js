const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID =
  '674550642491-kcoktrtjj4ah51dsmpaeq8e328ndojk7.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const FACEBOOK_APP_ID = '2367626323414258';
const FACEBOOK_APP_SECRET = '936dd1f30eca526c6bfffedbac0ecbcb';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: '/auth/facebook/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
