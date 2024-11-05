CREATE SCHEMA produto;

CREATE TABLE IF NOT EXISTS produto(
    id SERIAL  PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    preco FLOAT,
    estoque INT
)

