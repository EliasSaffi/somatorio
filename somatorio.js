const date = `Main process: 
12345678900987654 | ATIVA AJUIZADA | R$ 999.000,00;
11 1 11 111111-11 | ATIVA AJUIZADA | R$999.000,00;
22 2 22 222222-22 | ATIVA AJUIZADA | R$   999.000,00; 
33 3 33 333333-33 | ATIVA AJUIZADA | R$ 999.000,00 ; 
44 4 44 444444-44 | ATIVA COM AJUIZAMENTO A SER PROSSEGUIDO | R$  999.000,00 ;
55 5 55 555555-55 | EXTINTA POR DECISAO ADMINISTRATIVA ORGAO DE ORIGEM DEV OU ARQ | R$ 1,11
`;

// Expressão regular para encontrar valores (value) monetários
const regex = /R\$[ ]*([\d.,]+)/g;

let value = [];
let match;
while ((match = regex.exec(date)) !== null) {
  value.push(parseFloat(match[0].replace("R$ ", "").replace("R$", "").replace(".", "").replace(",", ".")));
}

// Soma dos valores (value) na lista
const total = value.reduce((acc, curr) => acc + curr, 0);

console.log("Values Find:", value);
console.log("Total Final Value:", total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));