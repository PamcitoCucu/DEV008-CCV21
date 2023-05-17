# Tarjeta de crédito válida

## Índice

* [1. Descripción de Proyecto](#1-Descripción de proyecto)
* [2. Estado de Proyecto](#2-Estado de Proyecto)
* [3. Funciones y Aplicaciones](#3-Funciones y Aplicaciones)
* [4. Acceso al proyecto](#4-Acceso al proyecto)
* [5. Tecnologias utilizadas](#5-Tecnologías utilizadas)
* [6. Desarrolladora de Proyecto](#6-Desarrolladora de Proyecto)
* [7. Conclusión] (#7-Conclusión)

***

## 1. Descripción de Proyecto.
El presente proyecto ofrece a ambos usuarios, tanto a la marca "MANU" (la cual ofece servicio de spa), como a los miembros de dicho spa, qque los usuarios paguen de manera segura  traves de la pagina propia del spa; con ello no solo adquiere planes de servicios del spa, sino también, puede acceder a promociones y descuentos para compra de productos de venta en linea.
Así los usuarios del spa, pueden acceder a su cuenta y disfrutar de los beneficios de su membresía, sin necesidad de hacer filas y con la practicidad de hacerlo desde la comodidad de sus dispositivos. Seguros de que sus datos son debidamente protegidos y validados.
En la construccion de la aplicacion, se planeo una maqueta de como debería ser la composición y orden de los elementos con los que puede interactuar un usuario, partiendo de ejemplos ya probados en la red, en un proceso de compra. En el que el usuario y propietario de la trajeta, ingrese en serie de pasos los datos de tarjeta, en caso de que omita alguno, la interfaz le avisara que debe de ingresarlo, de lo contrario no se puede continuar con el proceso. Una vez ingresados todos los datos requeridos, la interfaz comprueba que dicho medio de pago sea valido, de ser asi protege parcialmente el numero de tarjeta para seguridad del usuario. Mismo caso sucede con el codigo de seguridad que es protegido al ingresarlo.

## 2. Estado del Proyecto
La construcción de este proyecto esta basada en la practicidad de que el usuario pueda ingresar sus datos bancarios de manera fácil, y tenga claro que cada uno de los campos deberá ser ingresado para poder proceder a ingresar pago. 
La aplicación ha pasado las pruebas de los test, para su presentación.

## 3.Funciones y Aplicaciones

La construccion de la aplicación, esta basada en una serie de pasos y condiciones para su correcto desarrollo. 
Con base en un boilerplate, la estructura del proyecto se desarrolla en mayorparte en JS, integrando lenguaje html y CSS. 
En html, se construyó la estructura simple para que los usuarios ingresen datos básicos de su tarjeta, tomando en cuenta la imagen de la marca e indicando instrucciones breves a realizar con la interfaz. Los elementos que se trabajaron en style, son igualmente sencillos, en tonos neutros y elementos simples, con la intención de asociar la imagen natural y sobria de la marca con la pagina.
Para un mejor entendimiento y desarrollo del codigo JS, la implementacion de objetos y sus funciones (validator y maskify) se generaron en un index llamado validator Js, en el cual se trabajaron las funciones para prueba y enmascarado de los input establecidos desde index.html; siendo así, en otro index de Js, se desarrolla la estructura de los eventos del DOM, haciendo el llamado a las pruebas ejecutadas en el Validator.Js generado. 
Las pruebas en JS, fueron aplicadas y aprobadas, tras una serie de intentos, con las condiciones y datos que proporciona el validator.spec.js.
Actualmente la interfaz se comporta correctamente.

## 4.Acceso al Proyecto
El contenido ha sido alojado en el portal Github, en la cuenta ubicada en la siguente liga: 

Para la visualización de la pagina, puedes acceder a la siguente liga: 

## 4.Tecnologías Utilizadas
Para este proyecto, se trabajó con algunas tecnologías en el desarrollo web "frontend", para asi construir una interfaz para la comunicacion del usuario con el servidor.
Se desarrollo parte de la estructura de codigo en html, para clasificar contenido de texto, etiquetas y objetos. Simultaneamente se diseño en CSS el aspecto visual de los elementos generados por html, como color, tipografia,  dimensiones y disposicion de los elementos 
En JavaScript, a su vez se trabajo en la interaccion y dinmismo al sitio web, accionando los elementos del DOM, establecidos en el index.html

## 6. Desarrolladora de Proyecto
Este proyecto fue realizado por @Pam San Luis

## 7. Conclusión
Credit Card Validation ha sifo un proyecto complejo, aunque son pocas las funciones y condiciones que se requieren para larealización de una interfaz del usuario, para que pueda ingresar sus datos bancarios, que suele ser una actividad cotidiana, el trabajo para la construccion de dicha estuctura represento para mi todo un reto, pues la comprensión y entendimiento de cada uno de los elementos en los 3 tipos de lenguaje, me fueron complejos y lentos, algunos en diferente medida. Las indicaciones del read me son claras, sin embargo al ser mi primer proyecto , desconocía de como comenzar a trabajar en JS lo indicado, entiendo lo solicitado sin embargo en ejecutarlo es todo un desafío cuanto tienes nulo conocimiento del tema. Dentro de los 3 tipos de lenguaje Considero que Html al ser una estructura estatica, me fue mas facil de trabajar, CSS lo explore poco debido a los pocos elementos que contiene el index.html. 
Igual cabe destacar que el trabajo en equipo es de suma importancia para un crecimiento y aprendizaje, pues a pesar de ser un proyecto individual, sin el apoyo de mi squad no hubiese logrado avanzar de la misma forma.
El aprendizaje en este arranque ha sido significativo, esperando mejorar tanto en organizacion de la informacion, tiempo y recursos eficientes para el aprendizaje y ejecución en los proximos proyectos. 




