document.querySelector('.button').addEventListener('click', getForecast)

function getForecast(){
    let city = document.querySelector('#city').value
    let country = document.querySelector('#country').value
    
    fetch(`http://api.weatherapi.com/v1/current.json?key=6bcdd031117f4be3a08153533221410&q=${city}&q=&aqi=no`)
        .then(res => res.json())
        .then(data => {
            console.log(data.current.temp_f)
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}
