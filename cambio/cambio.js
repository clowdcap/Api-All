/* Chave API */
api_key = 'apSkSYIf4SGKTIkE3s7XXml4Xp1GXj8s'

/* Pegando valor dos inputs */
select_to = document.querySelector('.lista_to')


select_from = document.querySelector('.lista_from')


amount_input = document.querySelector('#amount_input')

/* botao que gera ativa */
botao = document.querySelector('.botao')

/* Blocos das saidas */
to_out = document.querySelector('.to_out')
from_out = document.querySelector('.from_out')
valor_out = document.querySelector('.valor_out')

async function ver_conversao(to, from, amount) {

    myHeaders = new Headers()
    myHeaders.append("apikey", api_key)

    requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    }
    console.log('amount:' + amount)
    const data = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
    .then(
        res => res.json()
    )

    to_out.innerHTML = opcao_to
    from_out.innerHTML = opcao_from
    console.log(data);
    valor_out.innerHTML = 'R$ ' + data.result.toFixed(2)
}


botao.addEventListener('click', function() {
    valor = amount_input.value
    opcao_to = select_to.options[select_to.selectedIndex].value
    opcao_from = select_from.options[select_from.selectedIndex].value

    ver_conversao(opcao_to, opcao_from, valor)   

})

/*



var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  



  
    .catch(
        error => console.log('Erro:', error)
    )
  
  
*/