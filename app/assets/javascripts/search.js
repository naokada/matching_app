$(function() {
    let input = $("#store_search__input");

    input.on('input', function(e) {
        let val = input.val();
        console.log(val);
    })
})

function search(input) {
    let url = "https://api.gnavi.co.jp/RestSearchAPI/v3/";
    let params = {
        keyid: ENV["GURUNABI_KEY"],
        format: 'json',
        latitude: 35.670083,
        longitude: 139.763267,
        range: 1
    };
    let endpoint = url + GURUNABI_KEY + "" + input;
}