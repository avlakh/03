"use strict";var topPanel={show:function(t,e){var n='<div id="top-panel" class="top-panel '.concat(e,'">').concat(t,"</div>");null!==document.getElementById("top-panel")&&document.getElementById("top-panel").remove(),document.body.insertAdjacentHTML("afterbegin",n),this.hide()},hide:function(){setTimeout(function(){document.getElementById("top-panel").remove()},3e3)},error:function(t){this.show(t,"panel-error")},success:function(t){this.show(t,"panel-success")},info:function(t){this.show(t,"panel-info")}},CART=[{name:"Milk",qty:2,isBuy:!1,price:23.45,total:46.9}];function addToCart(e,t,n){var o,a;void 0===CART.find(function(t){return t.name===e})?(CART.push({name:e,qty:t,isBuy:!1,price:n,total:parseFloat((t*n).toFixed(2))}),topPanel.success("Product sucessfully added")):(o=CART.findIndex(function(t){return t.name===e}),a=CART[o].qty+t,CART[o].qty=a,CART[o].total=parseFloat((a*CART[o].price).toFixed(2)),topPanel.success("Product quantity changed")),viewCartTable()}function checkAndAddToCart(){var t=document.getElementById("product_name").value,e=parseInt(document.getElementById("product_qty").value),n=parseFloat(document.getElementById("product_price").value),o=!0;""===t&&(topPanel.error("Enter product name"),o=!1),isNaN(e)&&(topPanel.error("Enter quantity valid value"),o=!1),e<=0&&(topPanel.error("Quantity must be positive"),o=!1),isNaN(n)&&(topPanel.error("Enter price valid value"),o=!1),n<=0&&(topPanel.error("Price must be positive"),o=!1),o&&(addToCart(t,e,n),document.getElementById("product_name").value="",document.getElementById("product_qty").value="1",document.getElementById("product_price").value="")}function viewCartTable(){var e="";CART.forEach(function(t){e+="\n            <tr>\n                <td>".concat(t.name,"</td>\n                <td>").concat(t.qty,"</td>\n                <td>").concat(t.price.toFixed(2),"</td>\n                <td>").concat(t.total.toFixed(2),"</td>\n            </tr>\n        ")}),document.getElementById("cart-tbody").innerHTML=e}viewCartTable();