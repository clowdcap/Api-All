nome_pokemon = document.querySelector('#nome_pokemon')
id_pokemon_html = document.querySelector('.id_pokemon_html')
img = document.querySelector('.img')
botao = document.querySelector('.botao')
nome_pesquisa = document.querySelector('#pesquisa')

async function ver_pokemom(id_pokemon_busca) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id_pokemon_busca}`)
    .then(
        res => res.json()
    )
    
    /* Requisitando valores da API */
    id_pokemon = data.id
    nome = data.name
    link_foto = data.sprites.other["official-artwork"].front_default
    
    /* Foto */
    img.innerHTML = `<img src="${link_foto}" alt="Img">`
    
    /* Nome */
    nome_pokemon.innerHTML = nome
    
    /* Id */
    id_pokemon_html.innerHTML = id_pokemon
}
ver_pokemom(1)

botao.addEventListener('click', function(e) {
    e = nome_pesquisa.value
    ver_pokemom(e)
    nome_pesquisa
});
