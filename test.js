const stripe = require('stripe')('sk_test_BQokikJOvBiI2HlWgH4olfQ2');

// Create a payment intent to start a purchase flow.
let paymentIntent = await stripe.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
  description: 'My first payment',
});

// Complete the payment using a test card.
await stripe.paymentIntents.confirm(paymentIntent.id, {
  payment_method: 'pm_card_mastercard',
});