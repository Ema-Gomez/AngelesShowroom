const express = require('express');
const mercadopago = require('mercadopago');
const router = express.Router();

mercadopago.configure({
    access_token : process.env.CREDENCIAL_MP
})

const nuevoPago = (req, res) => {

    let preference = {
        items: [{
			title: "producto",
			unit_price: 200,
			quantity: 1,
		},
        {
			title: "producto2",
			unit_price: 100,
			quantity: 2,
		}],
		back_urls: {
			"success": "http://localhost:8080/feedback",
			"failure": "http://localhost:8080/feedback",
			"pending": "http://localhost:8080/feedback"
		},
		auto_return: 'approved',
	};
       
    mercadopago.preferences.create(preference)
    .then(function(response){
        console.log(response.body.id);
        res.json({preferenceId: response.body.id})
    }).catch(function(error){
        console.log(error);
    });
    
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