Projeto Mobile - Instruções de Configuração
Este projeto é uma aplicação backend que utiliza Node.js, PostgreSQL como banco de dados e Docker para facilitar a configuração do ambiente.

Pré-requisitos
Antes de começar, você precisará ter os seguintes softwares instalados em sua máquina:

Docker e Docker Compose
Node.js
NPM
Configuração
1. Clone o repositório
git clone hhttps://github.com/RiumeCarlosA/OPT120-ATV1
cd OPT120-ATV1
2. Configuração do Banco de Dados com Docker
Dentro do diretório do projeto, use o Docker Compose para configurar e iniciar o banco de dados PostgreSQL.

Alterando as variáveis de ambiente
Antes de iniciar o Docker, altere o arquivo .env com suas configurações de banco de dados. Aqui está um exemplo de como o arquivo .env pode ser configurado:

DATABASE_USERNAME=postgres
DATABASE_PASSWORD=123@banco
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE=mobile
Certifique-se de que as variáveis no .env estejam corretas e correspondam ao docker-compose.yml.

Executando o Docker Compose
Agora, execute o comando abaixo para iniciar o container do PostgreSQL e aplicar o script de migração.

docker-compose up -d
Este comando iniciará o container PostgreSQL no background.

3. Instalando Dependências
Com o banco de dados em execução, instale as dependências do projeto Node.js. No diretório raiz do projeto, execute:

npm install
Isso instalará todas as dependências listadas no arquivo package.json.

4. Rodando a Aplicação
Agora que as dependências foram instaladas, você pode iniciar o servidor. Execute o seguinte comando:

npm run dev
Acessando a Aplicação
Agora você pode acessar a API no navegador ou no Postman usando a URL:

http://localhost:3001/produtos/
Endpoints Disponíveis
POST /produtos/ - Cria um novo produto.
GET /produtos/ - Lista todos os produtos.
GET /produtos/:id - Obtém um produto pelo ID.
PUT /produtos/:id - Atualiza um produto pelo ID.
DELETE /produtos/:id - Soft delete de um produto.
Fechando o Ambiente
Para parar e remover os containers e volumes criados pelo Docker Compose, execute:

docker-compose down -v
Isso desligará e removerá os containers e volumes, mas manterá as imagens.