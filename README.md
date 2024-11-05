Projeto 01 - README BACKEND

Projeto Backend que utiliza Node.js, Express e postgres.

Pré-requisitos
Instale os Seguintes softwares e dependências com os seguintes comandos:

Docker: 

        sudo apt update
        
        sudo apt install -y ca-certificates curl gnupg lsb-release
        
        sudo mkdir -p /etc/apt/keyrings
        
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
        
        sudo apt update
        
        sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

NPM: 

    npm install

Node.js: 

        curl -fsSL https://fnm.vercel.app/install | bash
         
         source ~/.bashrc
         
         fnm use --install-if-missing 22

Postgres: 

        sudo apt install -y postgresql postgresql-contrib

Mantenha o Postgres e o docker em execução

1. Clone o repositório:
git clone https://github.com/jhenrique63/Produto-API


Altere o arquivo .env com os dados do seu banco de dados, assim como no exemplo abaixo:

DATABASE_USERNAME=postgres
DATABASE_PASSWORD=password
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE=mobile

Execute os seguintes comandos para rodar a aplicação:

docker-compose up 



Acesse a API no navegador ou no Postman usando a URL:

http://localhost:3000/produtos/


Endpoints Disponíveis
POST /produtos/ - Cria um novo produto.
GET /produtos/ - Devolve a lista de Produtos.
GET /produtos/:id - Devolve um produto pelo ID.
PUT /produtos/:id - Atualiza os dados de um produto pelo ID.
DELETE /produtos/:id -  Deleta um produto da lista.


Para encerrar a execução da aplicação, use:

docker-compose down 
