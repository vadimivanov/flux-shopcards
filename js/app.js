var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Login = require('./components/Login');
//var AddCard = require('./components/Add_card');
var CustomAlert = require('./components/Custom_alert');
var App = React.createClass({

    getInitialState: function () {
        return {
            currentView: "AddCard",
            startRout: "Login",
            params: null
        };
    },

    componentDidMount: function () {
    },

//    getCurrentView: function () {
//        CardActions.updateCardVisible();
//    },
    render: function () {
//        var frames = {
//                AddCard: <AddCard />,
//                Login: <Login />
//            },
//            viewNodes = frames[this.state.currentView];

        return (
            <div className='main-wrapper'>
                <div className='main-frame'>
                    <RouteHandler/>
                </div>
                <CustomAlert />
            </div>
            );
    }
});

//React.render(
//    <App />, document.getElementById('screen')
//);

module.exports = App;
