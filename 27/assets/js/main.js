$(function(){
    const val = $('ol').attr('data-foo', 'hello');
    const text = $('ol li:first-child').text('hello');
    
    console.log(text);
})