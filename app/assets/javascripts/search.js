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
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        alert("位置情報の取得に失敗しました。");
    }
}

function showError(e) {
    console.log(e);
}

function showPosition(position) {
    let location = {};
    let data = position.coords;
    location.lat = data.latitude;
    location.lng = data.longitude;
    console.log(location)

    // findCafes(location);
    initMap(location);

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

    // $.ajax({
    //     url: endpoint,
    //     type: "GET",
    //     crossDomain: true,
    //     xhrFields: {
    //       withCredentials: true
    //     }
    //   })
    //   .done(perseJSON)
    //   .done(showResult)
    // .fail(function() {
    //     console.log("error");
    // })

    // fetch(endpoint, {
    //     mode: 'cors',
    //     credentials: 'include',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     }
    // })
    // .then(showResult);


}

function showResult(data) {
    console.log('showResult');
    console.log(data);
}

function initMap(position) {
    var mapCenter = new google.maps.LatLng(position.lat,position.lng);
  
    var map = new google.maps.Map(document.getElementById('map'), {
      center: mapCenter,
      zoom: 15
    });
  
    // var request = {
    //   query: 'Museum of Contemporary Art Australia',
    //   fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
    // };

    var request = {
        location: position,
        radius:1500,
        type: ["cafe"],
      };
  
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }
  
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        // createMarker(results[i]);
        console.log(place);
      }
    }
  }
