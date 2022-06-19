"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}var Circle=function(){function s(t,e,i,r,n,c){_classCallCheck(this,s),this.width=t,this.height=e,this.color=i,this.left=r,this.top=n,this.borderRadius=c}return _createClass(s,[{key:"circleArea",value:function(){return Math.PI*(this.radius*this.radius)}},{key:"circleLength",value:function(){return 2*Math.PI*this.radius}},{key:"showCircle",value:function(){document.getElementById("circle_to_go").insertAdjacentHTML("beforeend",'\n            <div class="circle" style="width: '.concat(this.width,"px;height: ").concat(this.height,"px; background-color: ").concat(this.color,"; left: ").concat(this.left,"px; top: ").concat(this.top,"px; position: absolute; border-radius: ").concat(this.borderRadius,'%"</div>'))}},{key:"getRadius",get:function(){return this._radius}},{key:"setRadius",set:function(t){this.radius=t}},{key:"getDiameter",get:function(){return this.circleLength()/Math.PI}}]),s}();