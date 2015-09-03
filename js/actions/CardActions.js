var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCardConstants = require('../constants/FluxCardConstants');

var CardActions = {

    receiveCard: function(data) {
        AppDispatcher.handleAction({
            actionType: FluxCardConstants.RECEIVE_DATA,
            data: data
        })
    },

    selectCard: function(index) {
        AppDispatcher.handleAction({
            actionType: FluxCardConstants.SELECT_PRODUCT,
            data: index
        })
    },

    addToCard: function(sku, update) {
        AppDispatcher.handleAction({
            actionType: FluxCardConstants.CART_ADD,
            sku: sku,
            update: update
        })
    },

    removeCard: function(sku) {
        AppDispatcher.handleAction({
            actionType: FluxCardConstants.CART_REMOVE,
            sku: sku
        })
    },

    updateCardVisible: function(cartVisible) {
        AppDispatcher.handleAction({
            actionType: FluxCardConstants.CART_VISIBLE,
            cartVisible: cartVisible
        })
    }
};

module.exports = CardActions;