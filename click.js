

//实现点击事件的js代码
window.onload = ()=>{
    document.getElementById("go").addEventListener("click", e=> {
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const minacc = document.getElementById('minacc').value;
    const el = document.querySelector("[gps-new-camera]");
    let index = 0;
    setInterval(function(){    
        let curlat = lat + 0.001*index;
        let curlon = lon + 0.001*index;
        el.setAttribute('gps-new-camera', { simulateLatitude: lat, simulateLongitude: lon, positionMinAccuracy: minacc } );
        console.log("当前纬度值为"+String(lat));
        console.log("当前经度值为"+String(lon));
        index+=1;
    },1000);

    });
}

