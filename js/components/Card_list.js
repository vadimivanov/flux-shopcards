var React = require('react');
var CardActions = require('../actions/CardActions');
var Get = require('../utils/network.js');
var CardsList = React.createClass({

    getInitialState: function () {
        return {
            items: [],
            finished: false
        };
    },
    componentDidMount: function () {
        var self = this,
            promise = new Promise(function(resolve, reject) {
            var dd =  Get.request({
                data:'where={"user":{"__type":"Pointer","className":"_User","objectId":"kQ0BQHllBo"}}',
                service: "/classes/ShoppingList",
                method: "GET"
            });
                resolve(dd);
            });
            promise.then(
                function(success) {
                    console.log('ShoppingList success',success);
                    self.setState({items: success.results});
                },
                function(error) {
                    console.log('ShoppingList err',error);
                });
    },
    handleChange: function (index, e) {
//        var checkedModel = this.state.items[index];
//        var modelId = e.target.getAttribute('data-id');
        var stateFlag = this.state.items[index].finished;
//        checkedModel.set({finished:  (this.state.items[index].id === modelId ? !stateFlag : stateFlag)});
//        checkedModel.save();
        this.setState({ finished: stateFlag });
    },
    removeItem: function (id) {
        console.log('removeItem',id);
        Get.request({
            data:'',
            service: "/classes/ShoppingList/"+id,
            method: "DELETE"
        });
    },
    render: function () {
        var mapItem,itemFinished,self=this;
        return (
            <ul className='list'>
                {this.state.items.map(function(item, index) {
                    mapItem = item.content;
                    itemFinished = item.finished;
                    return <li className={itemFinished ? 'list-item finished' : 'list-item '}>
                        <div className="delete" onClick={self.removeItem.bind(null,item.objectId)}>del</div>
                        <div className="itemContent">
                            <input type="checkbox" data-id={item.objectId} checked={itemFinished}
                            onChange={self.handleChange.bind(this, index)}/>
                            <span className="itemName">
                                {mapItem.name}
                            </span>
                            <span className="itemAmount">
                                {mapItem.amount}
                            </span>
                        </div>
                    </li>
                })}
            </ul>
            );
    }
});

module.exports = CardsList;