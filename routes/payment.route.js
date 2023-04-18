import express from "express"
import stripe from "stripe"

const stripeInstance = stripe('sk_test_51My8ZmGtqQKE3YPXEZ7ktHTBYvQRmVnByBQyE2ZSAPHNMkySj9RIDSXxJm7iwkvER7RtunWO2YWJSATWo2W5HnoV0068h1URKy')

const router =  express.Router()


router.post("/create-checkout-session",async (req, res) => {
    console.log(req.body)
    const session = await stripeInstance.checkout.sessions.create({
      line_items: [
        req.body.stripeData
      ],
      mode: 'payment',
      success_url: 'http://localhost:5173/payment/success',
      cancel_url: 'http://localhost:5173',
    });
    
    
    res.json({url:session.url})
    
  });


  export default router