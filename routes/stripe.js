const router = require("express").Router();
//const stripe = require("stripe")(process.env.STRIPE_KEY);
const stripe = require("stripe")("sk_test_51K6VqiAEbSxYV6iJK4P6rmBMzhf0vQUchm5cb1EPK4MId680QTgwRKOirCbDfFDGZiiW0kdNuwtyM2qhe04MT4BX00kBDjIHMZ");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;