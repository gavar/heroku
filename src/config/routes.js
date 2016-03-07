var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Home = require('../components/Home');

module.exports = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
    </Route>
);

