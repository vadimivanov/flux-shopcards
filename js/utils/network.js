var React = require('react');
var $ = require('jquery');

module.exports = {
    request: function (obj) {
        var URL = "https://api.parse.com/1",
            SERVICE ={
                login: "/login",
                users: "/users",
                classes: "/classes/" + obj.classes
            };
        console.log("obj",obj);
       return $.ajax({
            type: obj.method,
            headers: {
                'X-Parse-Application-Id': '1D42VXTI4hXuAN5QwdgUZE7eQJYO0vdmsTPFwfDC',
                'X-Parse-REST-API-Key': '7clJXiadsanOS5fb9bfx3GKEbhjavMgEM7lt6ij9',
                contentType: "application/json"
            },
            url: URL + obj.service,
            dataType: 'json',
            data: obj.data

        });
    }
};