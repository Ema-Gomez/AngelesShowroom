const express = require('express');
const mercadopago = require('mercadopago');
const router = express.Router();

mercadopago.configure({
    access_token : process.env.CREDENCIAL_MP
})

const nuevoPago = async (req, res) => {
	try{
        let {items} = req.body;
		let {payer} = req.body;
		let {shipments} = req.body;
		
		console.log("items:",items)
        let preference = {
	    	items,
	    	payer,
	    	shipments,
	    	back_urls: {
	    		"success": "http://localhost:4200/inicio",
	    		"failure": "http://localhost:8080/feedback",
	    		"pending": "http://localhost:8080/feedback"
	    	},
	    	auto_return: 'approved',
	    };
        mercadopago.preferences.create(preference)
        .then(function(response){
            console.log(response.body);
			let preferenceId = response.body.id
            res.json({preferenceId})
        }).catch(function(error){
            console.log(error);
        });
	} catch(e){
		console.log(e);
	}
}

const respuestaPago = (req, res) => {
    response.json({
		Payment: request.query.payment_id,
		Status: request.query.status,
		MerchantOrder: request.query.merchant_order_id
	})
}
router.post("/nuevo", nuevoPago);
router.get("/estado_pago", respuestaPago);
module.exports = router;