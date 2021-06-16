let submit = $("#submit");
let userValue, ip;
var map = L.map('mapid');
var mymap = map.setView([51.505, -0.09], 13);
var lat, lng;
console.log(mymap._lastCenter);

submit.click(() => {
    userValue = $("#submit-value")[0].value;
    if(userValue != null || userValue != " "){
        let url = "https://geo.ipify.org/api/v1?apiKey=at_KLlaoRmux88uW5rZRvfCIHV2UwtVp&ipAddress=" + userValue;

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                console.log(data);
                lat = data.location.lat;
                lng = data.location.lng;
                mymap = map.setView([lat, lng], 13);
            },
            error: () => {
                //TEXT ERROR
            }
        });



    }
    console.log(mymap._lastCenter);
    userValue = " ";
});


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieWFubmlzaGFpc21hbm4iLCJhIjoiY2tweWhvaG9tMDdrcjJzcnJudWpjemxhZyJ9.gEW58ljtg0pS0f407Rpudg'
}).addTo(mymap);


