$(function() {
    console.log("loaded");
    getLocation();
    let input = $("#store_search__input");
    input.on('input', function(e) {
        let val = input.val();
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


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, ReferenceError);
    } else { 
        alert("位置情報の取得に失敗しました。");
    }
}

function showPosition(position) {
    let location = {};
    let data = position.coords;
    location.lat = data.latitude;
    location.lng = data.longitude;

    findCafes(location);

}

function findCafes(position) {
    let base_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    let location = "location=" + position.lat + "," + position.lng + "&radius=1500";
    let type = "&type=cafe";
    let key = "&key=" + gon.maps_api;
    let endpoint = base_url + location + type + key;

    // $.getJSON(endpoint, function(){
    //     console.log( "success" );
    // })
    // .done(showResult)
    // .fail(function() {
    //     console.log("error");
    // })

    fetch(endpoint, {
        mode: 'no-cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(showResult);
}

function showResult(data) {
    console.log('showResult');
    console.log(data);
}
