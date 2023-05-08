![Andes Drink Co | E-Commerce](https://firebasestorage.googleapis.com/v0/b/backend-react-js-39610.appspot.com/o/logo%2FOIG.hs0wxlNBWIwsjsP_zoomX200.png?alt=media&token=39ecaf8e-98f0-4dbf-b3a7-b75167deba15)

## Andes Drink Co | E-Commerce

## Objetivo
El objetivo del proyecto es la creación de una aplicación web para un e-commerce, utilizando React JS como herramienta principal y a Firebase como plataforma de desarrollo en la nube.

Dentro de las funcionalidades encontrarás;

- Navegación dinámica por las distintas secciones
- Categorías dinámicas
- Filtrado de ítems por categorías
- Validaciones de datos con la base de datos en Firebase 
- Alerta de ítems sin stock
- Adhesión de productos al carrrito.
- Dentro del carrito podrás; ver un detalle de los ítems seleccionados y la suma total, modificar cantidades, eliminar unidades, y validar stock antes de finalizar la compra.
- Al finalizar el workflow de la compra, se le entrega al cliente el número hash que se le asignó en la base de datos. 


## Herramientas Utilizadas

- [React-JS](https://beta.es.reactjs.org/) - base de la app.
- [Firebase](https://firebase.google.com/) - como base de datos.
- [GitHub](https://github.com/serafer) - para el deploy
- [Boostrap Icons](https://icons.getbootstrap.com/) - para iconos.
- [Vercel](https://vercel.com/) - hosting preview


## Instalación

Para poder utilizar este proyecto, necesitarás tener instalado [Node.js](https://nodejs.org/) y NPM en tu computadora. Luego, deberás seguir los siguientes pasos: 

- Clona este repositorio en tu computadora
- En la carpeta raíz del proyecto, ejecuta el comando -npm install- para instalar todas las dependencias necesarias
- Debes tener una cuenta de [Firebase](https://console.firebase.google.com/)
- Crea un nuevo proyecto en Firebase y genera al menos las colecciones "products" y "categories"
-- categories: "label" y "slug"
-- products: "category", "description", "img", "name", "price", "productBrandName", "productCategory", "size" y "stock"
- Copia las credenciales de tu proyecto de Firebase y pégalas en un archivo .env al nivel del .json. Seguir el siguiente criterio:

```sh
REACT_APP_FIREBASE_API_KEY=<API_KEY>
REACT_APP_FIREBASE_AUTH_DOMAIN=<AUTH_DOMAIN>
REACT_APP_FIREBASE_PROJECT_ID=<PROJECT_ID>
REACT_APP_FIREBASE_STORAGE_BUCKET=<STORAGE_BUCKET>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<MESSAGING_SENDER_ID>
REACT_APP_FIREBASE_APP_ID=<APP_ID>
```


- Ejecuta el comando npm start para iniciar el servidor local y ver el proyecto en tu navegador

```sh
npm start
```


## Demo

Podes probar la aplicación funcionando haciendo
 
[click acá: gh-pages](https://serafer.github.io/alefer-app/)
