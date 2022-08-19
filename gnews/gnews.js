api_key = '2aa2d0fe3995c2b56a23e63d9e5a64c8'
link_api = 'https://gnews.io/api/v4/search?q=example&token='


botao = document.querySelector('.botao')

box = document.querySelector('.box')


async function ver_gnews() {
    const data = await fetch(`${link_api}${api_key}`)
    .then(
        res => res.json()
    )
    
    todos_artigos = data.articles

    todos_artigos.map(function(elemento, indice, array){

        box.innerHTML = `
        <p>${data.articles[indice].title}</p>
        `
        
    }, 80);
}


botao.addEventListener('click', function(){
    ver_gnews()
})
