var React = require('react');
var Get = require('../utils/network.js');
var CardActions = require('../actions/CardActions');
var CardsList = require('../components/Card_list');

var AddCard = React.createClass({

    getInitialState: function () {
        return {
            items: [],
            value: '',
            render: true,
            currentUser: null
        };
    },
    componentDidMount: function () {
        var self = this;
//        ParseList.on('all', function () {
//            self.forceUpdate();
//        });
    },
    getInfo: function (e) {
        var name = this.refs.name.getDOMNode().value,
            amount = this.refs.amount.getDOMNode().value;

        console.log('currentUser',this.state, this.props);

        var parseObj = JSON.stringify({
            "content": {name: name, amount: amount},
            "finished": false,
            "user": {
                __type: "Pointer",
                className: "_User",
                objectId: "kQ0BQHllBo"
            }
        });
            Get.request({
                data: parseObj,
                service: "/classes/ShoppingList",
                classes: "ShoppingList",
                method: "POST"
            });

//            ShoppingList = Parse.Object.extend("ShoppingList"),
//            privateNote = new ShoppingList;
//
//        privateNote.set("content", {name: name, amount: amount});
//        privateNote.set("finished", false);
//        privateNote.set("user", userKey);
//        privateNote.save().then(function (res) {
//            ParseList.add(res);
//        });
        this.refs.name.getDOMNode().value = '';
        this.refs.amount.getDOMNode().value = '';
        this.setState({value: ''});
    },
    logout: function () {
//        Parse.User.logOut();
        Router.navigate("Login");
    },
    render: function () {
        return (
            <div className='addform-component'>
                <div className="row">
                    <button className="logout" onClick={this.logout}>Log out</button>
                </div>
                <h5>Add notes</h5>
                <div className="row">
                    <label htmlFor="name">product name:</label>
                    <input ref="name" type="text"/>
                </div>
                <div className="row">
                    <label htmlFor="amount">amount:</label>
                    <input ref="amount" type="text"/>
                </div>
                <div className="row">
                    <button onClick={this.getInfo}>Add</button>
                </div>
                <div className='list-wrap'>
                    <CardsList />
                </div>
            </div>
            );
    }
});

module.exports = AddCard;