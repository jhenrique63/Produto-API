CREATE SCHEMA IF NOT EXISTS produto;

CREATE TABLE IF NOT EXISTS produto.produto (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    preco float,
    estoque INT
);
