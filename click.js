//实现点击事件的js代码
document.getElementById("go").addEventListener("click", e=> {
const lat = document.getElementById('lat').value;
const lon = document.getElementById('lon').value;
const minacc = document.getElementById('minacc').value;
const el = document.querySelector("[gps-new-camera]");
el.setAttribute('gps-new-camera', { simulateLatitude: lat, simulateLongitude: lon, positionMinAccuracy: minacc } );
});
