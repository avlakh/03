"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

require("./assets/css/bootstrap.min.css");

require("./assets/css/main.css");

require("./assets/css/responsive.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _vue.createApp)(_App["default"]).use(_router["default"]).use(_router["default"]).mount('#app');