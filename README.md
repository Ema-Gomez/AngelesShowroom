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


### Descargando express y librerias: 

Para ello debemos utilizar el comando "npm install" o simplemente "npm i" (forma reducida) seguido de la libreria a instalar:

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
```

NOTA: El -g implica que estos paquetes se instalan de forma global, es decir, pueden ser utilizados por cualquier nueva aplicacion que creamos.

PARA EL FRONTEND:

Debemos instalar angular cli, que es un interprete de comandos desde el cual podemos inicializar el proyecto. Se instala a travez de la terminal de NODEJS.

Instalar angular CLI:
```
npm i -g @angular/cli
```

## Comenzando: 
Ahora debemos clonar el repositorio en tu maquina local. Lo puedes hacer desde [AQUI](https://github.com/Ema-Gomez/AngelesShowroom/archive/main.zip). Se descargara una carpeta llamada angelesShowroom que contiene tanto el back como el front.

Dentro de la carpeta AngelesShowrrom/backend vas a encontrar una carpeta llamada "tablas-sql" en la cual se encuentra la base de datos "angelesshowroom.sql". Para poder utilizarla debemos:

Ejecutar XAMPP, dentro de el debemos inicializar el servidor apache y mysql, debe quedar asi:
<img src="/assets/Captura de pantalla xampp iniciado.png">

Luego abrimos el navegador e ingresamos a "localhost/phpmyadmin" e ingresamos (por defecto sin contraseña).

Clickeamos en nueva base de datos y le colocamos un nombre de referencia y la creamos.
<img src="/assets/Captura de pantalla phpadmin nuev.png">

A la izquierda nos aparecera la base de datos, clickeamos en ella y arrastramos el archivo "angelesshowroom.sql" y comenzaran a importarse las tablas del proyecto.
Debe quedar asi:
<img src="/assets/Captura de pantalla (8).png">

Dejamos XAMPP activo y continuamos:

Solo nos queda instalar algunas librerias especificas para este proyecto y asi poder inicializarlo.

Primero instalamos las librerias del backend, para ello debemos abrir la terminal de nodejs y a traves del comando "cd" (change directory) ingresamos hasta la carpeta donde esta contenido el backend. Si la carpeta AngelesShowroom estuviera en el escritorio accederiamos de esta forma:

Ingresar al escritorio:
```
cd desktop
```
Luego, ingresamos a la carpeta AngelesShowroom en el escritorio
``` 
cd angelesShowroom
```
Solo queda ingresar a la carpeta backend:
```
cd backend
```
Deberia verse asi:
<img src="/assets/Captura de pantalla terminal en angeles.png">

Aqui ya podemos instalar las librerias para el backend.

LIBRERIAS PARA ESTE PROYECTO ESPECIFICO:

Lo primero es instalar la carpeta node_modules donde se instalaran las siguientes librerias. Para esto ejecutamos:
```
npm install
```
Esperamos que termine y ya podemos continuar con los siguientes comandos:

MYSQL (nos permite conectar a la base de datos mysql)
```
npm i mysql
```
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

Solo nos queda instalar angular jwt (dependencia para interceptar los JWT en el front). Tambien desde la terminal de NODEJS.

Esta vez debemos ingresar a la carpeta del front porque es una libreria especifica para el proyecto. Hacemos lo mismo que para ingresar a la carpeta backend, cambiando esta por frontend.

deberia verse asi:
<img src="/assets/Captura de pantalla terminal front.png">

Solo queda tipear el siguiente comando:

```
npm i @auth0/angular-jwt
```  
Despues de esto, volvemos a la carpeta backend y ejecutamos "nodemon npm start". Comenzara a correr el backend.

Debe verse asi: 
<img src="/assets/Captura de pantalla (9).png">

Por ultimo, abrimos la terminal de windows (cmd) e ingresamos a la carpeta frontend con el comando "cd" que funciona como en la terminal de NODEJS. Una vez en la carpeta frontend tipeamos el comando "ng serve" que inicializa el proyecto de angular.

Debe quedar asi: 
<img src="/assets/Captura de pantalla (10).png">

Si todo salio bien, con ingresar desde el navegador a "localhost:4200" ya deberias poder visualizar el sitio.

## Endpoints:

Clientes: 

localhost:4200/inicio

localhost:4200/productos (Todos los productos disponibles)

localhost:4200/productos/categoria (Todos los productos de la categoria seleccionada)

Admin: Al solicitar alguna ruta de administrador se requerira un JWT que solo se obtendra si el administrador se loguea antes, de lo contrario no se podra acceder.

localhost:4200/admin (login admin)

localhost:4200/admin/inicio (por ahora aqui se realiza el CRUD de productos)


