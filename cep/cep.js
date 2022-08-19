link_api = 'https://viacep.com.br/ws/'
type_return_api = '/json/'

cep = document.querySelector('#cep')
logradouro = document.querySelector('#logradouro')
complemento = document.querySelector('#complemento')
bairro = document.querySelector('#bairro')
localidade = document.querySelector('#localidade')
uf = document.querySelector('#uf')
ibge = document.querySelector('#ibge')
ddd = document.querySelector('#ddd')

input_cep = document.querySelector('#pesquisa')
botao = document.querySelector('.botao')

async function ver_cep(cep) {
    const data = await fetch(`
        ${link_api}${cep}${type_return_api}
    `).then(
        res => res.json()
    )

    console.log(data)

    cep.innerHTML = data.cep
    logradouro.innerHTML = data.logradouro
    complemento.innerHTML = data.complemento
    bairro.innerHTML = data.complemento
    localidade.innerHTML = data.localidade
    uf.innerHTML = data.uf
    ibge.innerHTML = data.ibge
    ddd.innerHTML = data.ddd

}

botao.addEventListener('click', function(e) {
    e = input_cep.value

    if (e) {
        ver_cep(e)
    } else {
        console.log('Erro, minimo 8 números do CEP') 
    }
})

