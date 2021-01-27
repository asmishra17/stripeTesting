// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_51IAqJEGU6PkjlLbpOgamhO9BQ6hTYiIFWJimkC9KohmwBJeVsKnmBlZQGFNiBNX9PMYJP9Ktjjwr5NTGZyXjdFBp00Qym2DyJk');

const paymentIntent = await stripe.paymentIntents.create({
  amount: 1000,
  currency: 'usd',
  payment_method_types: ['card'],
  receipt_email: 'jenny.rosen@example.com',
});