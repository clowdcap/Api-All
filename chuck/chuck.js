link_api = 'https://api.chucknorris.io/jokes/search?query='



botao = document.querySelector('.botao')
input_pesquisa = document.querySelector('#pesquisa')
msg_chuck = document.querySelector('#msg_chuck')

select = document.querySelector('.lista-conteudos')
opcao = select.options.value

msg_chuck.innerHTML = 'Escolha alguma opção'

async function ver_chuck(busca_chuck) {
    const data = await fetch(`${link_api}${busca_chuck}`).then(
        res => res.json()
    )
    
    data.result.map(function(e) {
        msg_chuck.innerHTML = e.value   
    })
    
}

botao.addEventListener('click', function(){
    valor = select.value
    if (valor != 'null') {
        ver_chuck(valor)
    } else {
        msg_chuck.innerHTML = 'Escolha alguma opção'
    }
    
})




// ["animal","career","celebrity","dev","explicit","fashion",
// "food","history","money","movie","music","political",
 // "religion","science","sport","travel"]