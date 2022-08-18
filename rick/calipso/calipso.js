input_pesquisa = document.querySelector('#pesquisa')
botao = document.querySelector('.botao')
img = document.querySelector('.img')
nome_personagem = document.querySelector('#nome_rick')
especie_personagem = document.querySelector('.especie')
tipo_personagem = document.querySelector('.tipo')
id_rick_html = document.querySelector('.id_rick_html')

nome_personagem.innerHTML = '<h2 class="id_rick_html" style="text-align:center;padding: 1rem;">Pesquisar personagens de ID #1 até #826</h2>'

async function ver_rick(id_rick_pesquisa) {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id_rick_pesquisa}`)
    .then(
        res => res.json()
    )

    id_rick_html.innerHTML = data.id
    nome_personagem.innerHTML ='Nome: ' + data.name
    tipo_personagem.innerHTML ='Tipo: ' + data.type
    especie_personagem.innerHTML ='Espécie: ' + data.species
    link_foto = data.image
    img.innerHTML = `<img src="${link_foto}" alt="Img">`
}

botao.addEventListener('click', function(e) {
    e = input_pesquisa.value
    if(e > 0 && e < 827) {
        ver_rick(e)
    } else {
        img.innerHTML = '<img src="./undefine.jpeg" alt="Img">'
        nome_personagem.innerHTML ='Nome: Indefinido'
        id_rick_html.innerHTML = e
        tipo_personagem.innerHTML ='Tipo: Indefinido'
        especie_personagem.innerHTML ='Espécie: Indefinido'
    }
    
    console.log(e)
})

// Até ID 826