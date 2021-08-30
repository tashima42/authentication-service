# Authentication Service
Microserviço de autenticação baseado em [JWT](https://jwt.io/) e [ApiKeys](https://en.wikipedia.org/wiki/Application_programming_interface_key). Os Tokens gerados por esse serviço podem ser usados para autenticar um usuário em outros microserviços. 
A autenticação usando JWT melhora a performance das requests, ja que não é necessário consultar um banco de dados, porém, pra casos onde a conveniência é uma necessidade maior que a performance, também é possível usar ApiKeys.

## Como funciona
Quando um usuário é registrado, ele recebe um token e um refresh token. O token é um JWT válido por 2 horas, após esse período, ele precisa solicitar novos tokens de autenticação, utilizando o que está salvo na memória. 
1. JWT válido
	* Faz a request
2. JWT inválido
	* Usa o refresh token pra pedir um novo token e um novo refresh token
	* Salva no novo JWT e o novo refresh token
	* Faz a request

![Authentication Service_210829_215957](https://user-images.githubusercontent.com/23709916/131348522-0ba85010-6a4e-4a13-82bb-f3dcca8ce522.jpg)
## Development

1. Crie um arquivo com as variáveis de ambiente `.env` baseado no `.env.example`
2. Inicie os containers com `docker-compose up -d`
3. Rode as migrations do BD com `npx sequelize-cli db:migrate`
4. Desenvolva!
