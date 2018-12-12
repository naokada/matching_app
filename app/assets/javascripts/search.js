$(function() {
    getLocation();
    let input = $("#store_search__input");
    input.on('input', function(e) {
        let val = input.val();
    })
})


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
    console.log(location);

    findCafes(location);

}

// function findCafes(position) {
//     let base_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
//     let location = "location=" + position.lat + "," + position.lng + "&radius=1500";
//     let type = "&type=cafe";
//     let key = "&key=" + gon.maps_api;
//     let endpoint = base_url + location + type + key;

//     // $.getJSON(endpoint, function(){
//     //     console.log( "success" );
//     // })
//     // .done(showResult)
//     // .fail(function() {
//     //     console.log("error");
//     // })

//     // $.ajax({
//     //     url: endpoint,
//     //     type: "GET",
//     //     crossDomain: true,
//     //     xhrFields: {
//     //       withCredentials: true
//     //     }
//     //   })
//     //   .done(perseJSON)
//     //   .done(showResult)
//     // .fail(function() {
//     //     console.log("error");
//     // })

//     // fetch(endpoint, {
//     //     mode: 'cors',
//     //     credentials: 'include',
//     //     headers: {
//     //         'Content-Type': 'application/json',
//     //         'Accept': 'application/json'
//     //     }
//     // })
//     // .then(showResult);


// }

function showResult(data) {
    console.log('showResult');
    console.log(data);
}

function findCafes(position) {
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
        if (i < 6) {
            appendStoreHTML(place);
        }
      }
    }
  }

  function appendStoreHTML(place) {
    let div = document.createElement("div");
    let photo = document.createElement("img");
    photo.src = place.photos[0].getUrl({maxWidth: 640});
    console.log(photo);
    let h4 = document.createElement("h4");
    div.dataset.id = place.place_id;
    div.dataset.lng = place.geometry.viewport.ea.j;
    div.dataset.lat = place.geometry.viewport.la.j;
    h4.innerHTML = place.name;
    div.appendChild(photo);
    div.appendChild(h4);

    div.addEventListener("click", function() {
        $("#place_url").val($(this).data('id'));
        $("#place_name").val($("h4", this).text());
        $("#place_img").val($(this).children("img").attr("src"));
        $("#place_position").val("POINT(" + $(this).data('lng') + " " + $(this).data('lat') + ")");
    });
    $("#store_list").append(div);
  }
