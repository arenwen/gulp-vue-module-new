define(function(require, exports, module) {
    require.loadCSS({content : "body{background:red}body div{background:#fff}"});

    var a   = require("a");
    var Vue = require("vue");
    module.exports = Vue.component("xxx", {
        data : function() {
            return {
                a : 23456
            }
        },
        template : '<div class="list">{{a}}&#39;dfsadf&#39;<aaa :msg="a"></aaa></div>',
        props : ["msg"],
        components: {
            aaa : a
        }
    });
});