input_pesquisa = document.querySelector('#pesquisa')
botao = document.querySelector('.botao')
nome_cidade = document.querySelector('#nome_cidade')
coord = document.querySelector('#coord')
sys =  document.querySelector('#sys')
main =  document.querySelector('#main')
timezone =  document.querySelector('#timezone')
weather = document.querySelector('#weather')
wind =  document.querySelector('#wind')
clouds =  document.querySelector('#clouds')

async function ver_clima(valor_pesquisa) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valor_pesquisa}&appid=5be9e9bbeb51d5877b7a91ae6606db65&units=metric`).then(
        res => res.json()
    )

    if (data.cod == 400) {
        console.log('error')
    } else {


        nome_cidade.innerHTML = data.name
        coord.innerHTML = 'Long: ' + data.coord.lon.toFixed(6) + ' | Lat: ' + data.coord.lat.toFixed(6)
        sys.innerHTML = 'Country: ' + data.sys.country
        main.innerHTML = 'Temp: ' + data.main.temp + 'º | Min: ' + data.main.temp_min + 'º | Max: ' +  data.main.temp_max + 'º'
        weather.innerHTML = 'Clima: ' + data.weather[0].main + ' | Descricao: ' + data.weather[0].description
        wind.innerHTML = 'Wind Speed: ' + data.wind.speed + ' meter/sec | Wind Deg: ' + data.wind.deg + 'º'
        clouds.innerHTML = 'Clouds: ' + data.clouds.all + "%"
        
    }
}

ver_clima('Curitiba')
botao.addEventListener('click', function(e) {
    e = input_pesquisa.value 
    ver_clima(e)
})