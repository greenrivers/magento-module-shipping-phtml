const config = {
    paths: {
        'Magento_Checkout/template/shipping-address/shipping-method-item': 'Greenrivers_Shipping/template/shipping-address/shipping-method-item'
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/shipping': {
                'Greenrivers_Shipping/js/view/shipping-mixin': true
            }
        }
    }
};
