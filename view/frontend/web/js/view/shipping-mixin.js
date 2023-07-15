define([
    'ko',
    'Magento_Checkout/js/model/quote'
], function (
    ko,
    quote
) {
    'use strict';

    return function (Shipping) {
        return Shipping.extend({
            selectedMethod: ko.observable(() =>
                quote.shippingMethod() ?
                    quote.shippingMethod()['carrier_code'] + '_' + quote.shippingMethod()['method_code'] :
                    null
            )
        });
    };
});
