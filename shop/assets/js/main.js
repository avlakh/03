const topPanel = {
    show: function (text, className) {
        let panel = `<div id="top-panel" class="top-panel ${className}">${text}</div>`;
        if (document.getElementById('top-panel') !== null) {
            document.getElementById('top-panel').remove();
        }
        document.body.insertAdjacentHTML('afterbegin', panel);
        this.hide();
    },
    hide: function () {
        setTimeout(function(){
            if (document.getElementById('top-panel') !== null) {
            document.getElementById('top-panel').remove();
            }
        }, 3000)
    },
    error: function (text){
        this.show(text, 'panel-error');
    },
    success: function (text){
        this.show(text, 'panel-success');
    },
    info: function (text){
        this.show(text, 'panel-info');
    }
}

const CART = [
    {
        name: 'Milk',
        qty: 2,
        isBuy: false,
        price: 23.45,
        total: 46.90
    }
];

viewCartTable();

function addToCart (name, qty, price) {
    if (CART.find(el => el.name===name) === undefined) {
        CART.push({
            name: name,
            qty: qty,
            isBuy: false,
            price: price,
            total: parseFloat((qty * price).toFixed(2))
        });
        topPanel.success('Product sucessfully added');
    } else {
        const prodIndex = CART.findIndex(el => el.name===name);
        const newQty = CART[prodIndex].qty + qty;
        CART[prodIndex].qty = newQty;
        CART[prodIndex].total = parseFloat((newQty * CART[prodIndex].price).toFixed(2));
        topPanel.success('Product quantity changed');
    }
    viewCartTable();
}

// addToCart ('Milk', 2, 23.45);

function checkAndAddToCart() {
    let name = document.getElementById('product_name').value,
        qty = parseInt(document.getElementById('product_qty').value),
        price = parseFloat(document.getElementById('product_price').value);
    let valid = true;
    if (name==='') {
        topPanel.error('Enter product name');
        valid = false;
    }
    if (isNaN(qty)) {
        topPanel.error('Enter quantity valid value');
        valid = false;
    }
    if (qty <= 0) {
        topPanel.error('Quantity must be positive');
        valid = false;
    }
    if (isNaN(price)) {
        topPanel.error('Enter price valid value');
        valid = false;
    }
    if (price <= 0) {
        topPanel.error('Price must be positive');
        valid = false;
    }
    if (valid) {
        addToCart(name, qty, price);
        document.getElementById('product_name').value = '';
        document.getElementById('product_qty').value = '1';
        document.getElementById('product_price').value = '';
    } 
}

function viewCartTable () {
    let html = '';
    CART.forEach(product => {
        html += `
            <tr>
                <td>${product.name}</td>
                <td>${product.isBuy ? '<span class="badge bg-success">Yes</span>' : '<span class="badge bg-danger">No</span>'}</td>
                <td>${product.qty}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>${product.total.toFixed(2)}</td>
                <td>
                    <button type="button" class="btn btn-danger" onclick="askProductDelete('${product.name}')">&times;</button>
                </td>
            </tr>
        `;
    })
    document.getElementById('cart-tbody').innerHTML = html;
    document.getElementById('cart-total').innerText = sumTotal();
}

function sumTotal () {
    return CART.reduce((acc, curr) => {return acc + curr.total;}, 0);
}

function askProductDelete (name) {
    if (confirm('Delete '+name+'?')) {
        let index = CART.findIndex((element) => element.name===name);
        CART.splice(index, 1);
        viewCartTable();
        topPanel.info('Product sucessfully deleted');
    } 
}