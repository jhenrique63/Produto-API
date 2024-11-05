const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    host: "localhost",
    port: 5432,
    database: "postgres",
    password: "84218803"                // porta padrão do PostgreSQL
});

const produtos = [
  { id: 1, nome: 'Caneta', descricao: 'Marca: Bic; Cor: Azul', preco: 1.49, estoque: 100 },
  { id: 2, nome: 'Lápis', descricao: 'Marca: Faber Castell;', preco: 0.89, estoque: 150 },
  { id: 3, nome: 'Borracha', descricao: 'Marca: Faber Castell', preco: 0.49, estoque: 200 },
  { id: 4, nome: 'Caderno', descricao: 'Marca: Tilibra', preco: 23.49, estoque: 75 },
  { id: 5, nome: 'Estojo', descricao: 'Marca: Pacific', preco: 14.99, estoque: 50 },
];

async function seed() {
  try {
    await client.connect();
    console.log('Conectado ao banco de dados.');

    for (const produto of produtos) {
      await client.query(
        'INSERT INTO produto.produto (id, nome, descricao, preco, estoque) VALUES ($1, $2, $3, $4, $5)',
        [produto.id, produto.nome, produto.descricao, produto.preco, produto.estoque]
      );
      console.log(`Produto ${produto.nome} inserido com sucesso.`);
    }
    
    console.log('Todos os produtos foram inseridos.');
  } catch (err) {
    console.error('Erro ao inserir produtos:', err);
  } finally {
    await client.end();
    console.log('Conexão encerrada.');
  }
}

seed();
