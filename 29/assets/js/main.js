// xml hhtp request native js

// const xhr = new XMLHttpRequest();
// xhr.overrideMimeType('application/json')
// // link to the json file
// xhr.open('get', 'assets/data/cart.json');
// xhr.send();
// xhr.onreadystatechange = function (){
//     if (xhr.readyState === 4) {
//         if (xhr.status===200) {
//             console.log(xhr.response);
//             const response = JSON.parse(xhr.response)
//             viewCart(response);
//         } else {
//             alert(xhr.statusText);
//         }
//     }
// }

// fetch native js

// fetch('assets/data/cart.json')
//     .then (resp=> {
//         return resp.json();
//         // we got an object, we could check the status
//     })
//     .then (resp=>{
//         // we're working with an object 
//         console.log(resp);
//         viewCart(resp);
//     });

// using axios library

// axios.get('assets/data/cart.json')
//     .then(resp=>{
//         console.log(resp);
//         // resp data for axios
//         viewCart(resp.data);
//     })
//     .catch(err=>{
//         console.log(err);
//     });


// with jquery

// $.ajax({
//     url: 'assets/data/cart.json',
//     type: 'get',
//     dataType: 'json',
//     success: function(resp){
//         console.log(resp);
//         viewCart(resp)
//     },
//     error: function (err){
//         console.log(err);
//         alert(err.statusText)
//     }
// })

// with jquery

// $.ajax('assets/data/cart.json')
//     .done(function(resp){
//         console.log(resp);
//         viewCart(resp)
//     })
//     .fail(function(err){
//         console.log(err);
//         alert(err.statusText)
//     })

//  same as above, but with arrow function

// $.ajax('assets/data/cart.json')
//     .done((resp)=>{
//         console.log(resp);
//         viewCart(resp)
//     })
//     .fail((err)=>{
//         console.log(err);
//         alert(err.statusText)
//     })

// jquery, but a bit shorter
// $.get('assets/data/cart.json', (resp)=>{
//     viewCart(resp);
// })


// function viewCart (cart) {
//     let html = '<ul>';
//     cart.forEach(item=> {
//         html += `
//             <li>
//                 <b>${item.name}</b> ${item.qty} - ${item.price}
//             </li>
//         `
//     })
//     html += '</ul>'
//     document.body.insertAdjacentHTML('afterbegin', html);
// }

// d3010b7d - API KEY
// 294b52ec - sasha key

// we're loading the main.html to the index.html 
function loadPage (page){
    $.get('pages/'+page+'.html', (html)=>{
        $('#page_content').html(html);
    });
}

loadPage('main');

// click

$(function(){
    $('.nav-masthead a').on('click', function(e){
        e.preventDefault();
        loadPage($(this).attr("href"));
        $('.nav-link.active').removeClass('active');
        $(this).addClass('active');
    })
})

