var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Login = require('./components/Login');
var AddCard = require('./components/Add_card');
var App = require('./App');

var routes = (
    <Route path="/" handler={App}>
        <DefaultRoute name="login" handler={Login}/>
        <Route name="add" path="add" handler={AddCard}/>
    </Route>
    );

Router.run(routes, Router.HashLocation, function(Root) {
    React.render(<Root/>, document.getElementById('screen'));

});
