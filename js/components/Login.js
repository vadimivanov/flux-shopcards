var React = require('react');
var CardActions = require('../actions/CardActions');
var Get = require('../utils/network.js');
var Router = require('react-router');
var Link = Router.Link;
var Navigation = Router.Navigation;
var Login = React.createClass({
    mixins: [Navigation],
    login: function () {
        var self = this,
            login = this.refs.username.getDOMNode().value,
            pass = this.refs.password.getDOMNode().value;
        var promise = new Promise(function(resolve, reject) {
          var dd = Get.request({
                data: {
                    username: login,
                    password: pass
                },
                service: "/login",
                method: "GET"
            });
            console.log(dd);
            resolve(dd);
        });
        promise.then(
            function(success) {
                console.log('then success',success);
                self.transitionTo('/add');
            },
            function(error) {
                console.log('then err',error);
            });
    },
    signUp: function () {
        var self = this,
            newUsername = this.refs.newUsername.getDOMNode().value,
            newPassword = this.refs.newPassword.getDOMNode().value;
//
        Get.request({
            username: newUsername,
            password: newPassword,
            service: "users",
            method: "POST"
        });
    },
    showError: function (error) {
//        PubSub.publish("alert.channel", {error: error});
    },
    authSuccess: function () {
        console.log('auth success');
//        ParseList.init();

    },
    render: function () {
        var link = <Link to={'/add'}></Link>;
        return (
            <div className='signin-component'>
                <h5 className='header'>Sign in form</h5>
                <div className="row">
                    <div>
                        <input ref="username" placeholder="login" type="text"/>
                    </div>
                    <div>
                        <input ref="password" type="password" placeholder="password" />
                    </div>
                    <button onClick={this.login}>Sign in</button>
                </div>
                <h5 className='header'>Sign up form</h5>
                <div className="row">
                    <div>
                        <input ref="newUsername" placeholder="login" type="text"/>
                    </div>
                    <div>
                        <input ref="newPassword" placeholder="password" type="password" />
                    </div>
                    <button onClick={this.signUp}>Sign up</button>
                </div>
            </div>
            );
    }
});
module.exports = Login;