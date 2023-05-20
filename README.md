# PROYECTO FINAL REACT JS CODERHOUSE

## E-commerce Kora Accesorios.

Este proyecto consiste en la elaboración del e-commerce de una tienda de accesorios (Kora Accesorios) a través de la tecnología React JS.

Fue creada con Create React App y está formada por una página de inicio, un listado de productos desplegados desde una base de datos, una barra de navegación que permite filtrar los productos de acuerdo a params en los endpoints, una vista deplegable del detalle de cada producto con botones de ejecución de funciones y renderizado condicional.

Adicionalmente se trabajó el concepto de un carrito de compras, que permita visualizar los artículos añadidos, calcule el precio total y permita la interacción con el usuario modificando las cantidades de los productos directamente desde el carrito. Posteriormente se simula un formulario simple que recoge la data y la almacena en formato de Orden de compra, guardando los datos del cliente, su selección de productos, fecha de solicitud y código único para seguimiento del proceso.

## ¿Como clonar este repositorio?

```
https://github.com/HumbertoDominique/ProyectoReact-HDominique.git
```

## ¿Qué necesito para ejecutar este proyecto?

### `Dependencias que debes instalar:`

- Formik
- Yup
- SweetAlert2

### `Variables de entorno:`

Las variables de entorno son requeridas dado que el proyecto exporta y gestiona los productos y órdenes de compra directamente desde la base de datos.

Para esto, deberás crear un archivo .env y asignarle las siguientes variables de entorno:

- apiKey: REACT_APP_APIKEY,
- authDomain: REACT_APP_AUTHDOMAIN,
- projectId: REACT_APP_PROYECTID,
- storageBucket: REACT_APP_STORAGEBUCKET,
- messagingSenderId: REACT_APP_MESSAGINGSENDERID,
- appId: REACT_APP_APPID,

### `Formato tipo de los productos a gestionar:`

El proyecto requiere que los productos contentan los siguientes datos para su óptimo funcionamiento:

- title : Nombre del producto.
- description : Breve Descripción.
- price : Precio.
- stock : Unidades disponibles.
- category : Categoría:
- img : Imagen del producto:

!["esta es la imagen de react"](/public/logo192.png)
