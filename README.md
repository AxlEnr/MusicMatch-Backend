### Spoti-Friends Server
Backend de la aplicación web Spoti-Friends, creado utilizando NestJS. Este backend maneja la autenticación con Spotify y proporciona la API necesaria para la interacción con el perfil de usuario y la gestión de música social.

## Descarga del repositorio

1. Crea un directorio en tu sistema para alojar el proyecto.

2. Clona el repositorio usando el siguiente comando:
`git clone https://github.com/AxlEnr/Spoti-friends-Server.git`

3. Navega al directorio clonado: `cd Spoti-friends-Web`

## Ejecucion de la aplicacion
Para iniciar la aplicación, asegúrate de tener Node.js instalado y sigue estos pasos:
1. Instala las dependencias necesarias: `npm install`
2. Crear un archivo .env en la raiz con las siguientes variables:
```
PORT
DATABASE_UR
API_SERVICE
FRONTEND_URL
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
REDIRECT_URI=FRONTEND_URL/callback
```
3. Inicia el modo de desarrollo con el siguiente comando: `npm run start`

Esto iniciara la ejecucion del servidor en la vairable asignada a API_SERVICE

## Migracion de la BD
```
npx prisma generate
npx prisma migrate deploy
npx prisma migrate dev --name spotifriends
```

## Comandos disponibles
Para ejecutar el proyecto, puedes usar los siguientes comandos:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Ejecucion de pruebas

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

