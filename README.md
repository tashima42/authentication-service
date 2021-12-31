
# Authentication Service
[README 🇧🇷](https://github.com/Tashima42/authentication-service/blob/main/README-BR.md)
Authentication Microservice based in [JWT](https://jwt.io/) and [ApiKeys](https://en.wikipedia.org/wiki/Application_programming_interface_key).  The generated tokens can be used in other microservices to authenticate users
JWT authentication can improve latency, as it isn't necessary to make database lookups for each request, but, when convenience is the priority over latency, apikeys can also be used.

## How it works
When a new user register, he receives an authentication token and a refresh token, the authentication token is a standard JWT, valid for 2 hours, after this period, the client needs to use the refresh token to  request new credentials.
1. Valid JWT
	* Makes the request
2. Invalid JWT
	* Uses the refresh token to request a new authentication token
	* Saves the new JWT
	* Makes the request

![Authentication Service_210829_215957](https://user-images.githubusercontent.com/23709916/131348522-0ba85010-6a4e-4a13-82bb-f3dcca8ce522.jpg)
## Development

1. Create the environment variables file  `.env`  based on the `.env.example` file
2. Start the docker containers with `docker-compose up -d`
3. Run the migrations with `npx sequelize-cli db:migrate`
4. Develop!
