$(function() {
    let input = $("#store_search__input");

    input.on('input', function(e) {
        let val = input.val();
        console.log(val);
    })
})