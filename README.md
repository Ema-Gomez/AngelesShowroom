# Angeles

Angeles es una tienda online de ropa femenina. Hasta el momento funciona como catalogo online, las funcionalidades de carrito y pasarela de pagos se encuentran en desarrollo.

Por el momento solo se puede loguear el admin para acceder al panel de administracion de la tienda, en el cual puede dar de alta, modificar y eliminar productos. Cuando se habilite el carrito y la pasarela de pagos va a poder llevar el control de stock, ventas y pedidos (los cuales se generan al concretar la venta, para llevar un control de envios realizados y a realizar).

## Desarrollado con:

BACKEND:
* [MYSQL](https://www.mysql.com/) - Base de dats RELACIONAL
* [NODEJS](https://nodejs.org/es/) - Entorno de ejecucion servidor (v12.19.0)
* [EXPRESS](https://expressjs.com/es/) - Framework de nodejs para crear API's y apps web (v4.16.1)

FRONTEND:
* [ANGULAR](https://angular.io/) - Framework de desarrollo para JavaScript (v11.0)
* [BOOTSTRAP](https://getbootstrap.com/) Framework css y javascript utilizado para el diseño responsive del sitio.(v5.0)
 


## Prerequisitos:

Para poder ejecutar el proyecto en tu maquina local vas a necesitar las siguientes herramientas:

Para el Backend:

Lo primero que necesitamos es instalar XAMPP. [Descargalo aqui](https://www.apachefriends.org/es/download.html). Es un sistema de gestion de bases de datos MYSQL. Ingresa al link y descarga la version para tu SO.

Esto deberias ver al ingresar: <img src="/assets/Captura de pantalla xampp.png">

Luego debemos decargar NODEJS. [Descargalo aqui](https://nodejs.org/es/). Ingresa al enlace y hace click en recomendado para la mayoria. Como muestra imagen a continuacion.

<img src="/assets/Captura de pantalla nodejs.png">

Una vez instalado NODEJS, debemos abrir Node.js comand prompt (la terminal de NODEJS) desded la cual se debe descargar el FRAMEWORK express y algunas librerias necesarias para que el proyecto funcione correctamente.

Al abrir Node.js comand prompt deberias ver esto:

<img src="/assets/Captura de pantalla terminal.png">

Una vez instalado NODEJS, debemos abrir Node.js comand prompt (la terminal de NODEJS) desded la cual se debe descargar el FRAMEWORK express y algunas librerias necesarias para que el proyecto funcione correctamente.

Al abrir Node.js comand prompt deberias ver esto:

<img src="/assets/Captura de pantalla terminal.png">

Descargando express y librerias: Para ello debemos utilizar el comando "npm install" o simplemente "npm i" (forma reducida) seguido de la libreria a instalar:

Express
```
npm i express -g
```
Express generator (nos permite generar las bases de la app de forma rapida)
```
npm i express-generator -g
```
NODEMON (Utilidad que monitorea los cambios en el código fuente que se esta desarrollando y automáticamente nos muestra los cambios )
```
npm i nodemon -g

NOTA: El -g implica que estos paquetes se instalan de forma global, es decir, pueden ser utilizados por cualquier nueva aplicacion que creamos.

PARA EL FRONTEND:

Debemos instalar angular cli, que es un interprete de comandos desde el cual podemos inicializar el proyecto. Se instala a travez de la terminal de NODEJS.

Instalar angular CLI:
```
npm i -g @angular/cli
```
## Comenzando: 

LIBRERIAS PARA ESTE PROYECTO ESPECIFICO:

MYSQL (nos permite conectar a la base de datos mysql)
```
npm i mysql

UTIL (nos permite realizar funciones asincronicas)
```
npm i util
```
SHA1 (libreria con la cual podemos encriptar contenido)
```
npm i sha1
```
UUID (es un generador de identificadores unicos)
```
npm i uuid
```
EXPRESS-SESSIOM (generador de variables de sesion)
```
npm i express-session
```
NODEMAILER (libreria para envio de mails)
```
npm i nodemailer
```
DOTENV (crea variables de entorno)
```
npm i dotenv
```
JSON WEB TOKEN (nos permite generar tokens unicos)
```
npm i jsonwebtoken
```
MULTER (manejador de archivos)
```
npm i multer
```
HAPI JOI (libreria para validaciones)
```
npm i @hapi/joi
```

Solo nos queda instalar angular jwt (dependencia para interceptar los JWT en el front). Tambien desde la terminal de NODEJS
```
npm i @auth0/angular-jwt
```  
