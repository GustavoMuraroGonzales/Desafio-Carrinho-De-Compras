let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
    //Recuperar valores dos Prosutos: Nome, Quantidade e valor.
    let produto = document.getElementById('produto').value;
    //Usamos o split para dividir o nosso value assim podendo pegar valores separadamente.
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //Calcular preço, o  nosso subtotal
    let preco = quantidade * valorUnitario;
    //Adicionar no Carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$ ${valorUnitario}</span>
    </section>
    </section>`
    //Atualizar Valor Total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal. textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
}
function limpar() { 
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = '';
}
