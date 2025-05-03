const pedidos = [
    { num: 123, status: "enviado", total: 5000 },
    { num: 234, status: "entregue", total: 2000 },
    { num: 134, status: "entregue", total: 1000 },
    { num: 321, status: "aguardando pagamento", total: 2500 },
]

const totalGeral = pedidos.reduce((soma, pedido) => soma + pedido.total, 0);
const totalFiltro = pedidos.filter(pedido=> pedido.status !== "aguardando pagamento").reduce((soma, pedido) => soma + pedido.total, 0);
console.log(totalGeral);
console.log(totalFiltro);