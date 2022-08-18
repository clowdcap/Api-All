link_api = 'https://api.adviceslip.com'
service_api = '/advice/'

id_slip_html = document.querySelector('.id_slip_html')
botao = document.querySelector('.botao')
input_pesquisa = document.querySelector('#pesquisa')
nome_slip = document.querySelector('#nome_slip')

async function ver_slip(id_slip_busca) {
    const data = await fetch(`
        ${link_api}${service_api}${id_slip_busca}
    `).then(
        res => res.json()
    )

    nome_slip.innerHTML = data.slip.advice
    id_slip_html.innerHTML = data.slip.id
}

ver_slip(1)

botao.addEventListener('click', function(e) {
    e = input_pesquisa.value

    if (e > 0 && e < 225) {
        ver_slip(e)
        console.log(e.advice)
    } else {
        id_slip_html.innerHTML = e
        nome_slip.innerHTML = 'Erro, utilzar apenas valores ID entre #1 a #224'
    }

    
})