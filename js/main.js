$(document).ready(function () {
    // Get the split testing var
    var page_version = $.getUrlVar('tol');
    if (page_version) {
        $('html').addClass('v' + page_version);
    }
});

// function to get Url Vars
// Source: http://jquery-howto.blogspot.de/2009/09/get-url-parameters-values-with-jquery.html
$.extend({
    getUrlVars: function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    }
});

