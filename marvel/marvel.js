public_key = 'c6b288c83778cf7108f7f7179fe440c7'
private_key = 'acf6bf4662ffca84ef1b2351c630114a13276d3a'
link_api = 'http://gateway.marvel.com/v1/public/comics?apikey=${public_key}'
link_document = 'developer.marvel.com'



link_api = `http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`


linkP_api_2 = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${public_key}&hash=ffd275c5130566a2916217b101f26150`
botao = document.querySelector('.botao')

async function ver_marvel() {
    const data = await fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
    .then(
        res => res.json()
    )
    console.log(data)

}

botao.addEventListener('click', function(){
    ver_marvel()
})