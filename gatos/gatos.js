link_api = 'https://api.thecatapi.com/v1/images/search'

botao = document.querySelector('.botao')
id_gato = document.querySelector('#id')
img = document.querySelector('#img')

async function ver_gato() {
    const data = await fetch(`${link_api}`)
    .then(
        res => res.json()
    )
    console.log(data[0])

    id_gato.innerHTML = data[0].id
    img.innerHTML = `<img src=${data[0].url} style="width: 100%; height: 100%" width=${data[0].width} height=${data[0].height} alt="gato">`

}

botao.addEventListener('click', function(){
    ver_gato()
})