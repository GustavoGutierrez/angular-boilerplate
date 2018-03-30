# ANGULAR BOILERPLATE

Proyecto base para iniciar cualquier proyecto con Angular >= 5.2.9 usando ngrx para manejar el estado y flujo de los datos de la aplicación manteniendo un estándar en la organización del código e implementa las mejores prácticas actuales de Javascript haciendo uso de immutables, programación funcional.
Con el uso de librerías como: [Ramda](http://ramdajs.com), [Immutable](https://facebook.github.io/immutable-js/), [Tassign](https://www.npmjs.com/package/tassign), etc.

Este proyecto ofrece una estructura base organizada e intuitiva para el inicio de cualquier proyecto SPA complejo. proponiendo el uso de la immutabilidad con la programación funcional para hacer a nuestros proyectos fácilmente escalables y predecible tanto en Javascript como en CSS; En css se implementa una arquitectura escalable y mantenible con el uso de de ITCSS [http://itcss.io](http://itcss.io/).

## Caracteristicas

- Buenas practicas en la organización de archivos de la aplicación Angular.
- Compilación Ahead of Time (AoT) para rapida carga de páginas para la distribucón.
- Pruebas de codigo Angular con Jasmine y Karma.
- Pruebas de covertura con Istanbul y Karma
- End-to-end de codigo Angular usando Protractor.
- Administración de tipado usando @types
- Soporte de Angular 5.2.9 y control de cambios usando package.json y cualquier nueva caracteristica de versiones de Angular.

## Estructura de Aplicación

```
src
├───app
│   ├───admin
│   │   ├───dashboard
│   │   └───tasking
│   │       └───todo
│   ├───core
│   │   ├───guard
│   │   ├───layout
│   │   ├───navbar
│   │   └───services
│   ├───public
│   │   └───login
│   │       ├───loginForm
│   │       └───shared
│   ├───shared
│   │   ├───components
│   │   │   └───page-not-found
│   │   ├───directives
│   │   └───pipes
│   └───store
│       └───tasking
├───assets
│   ├───fonts
│   ├───icon
│   └───images
├───docs
├───environments
├───meta
└───scss
    ├───components
    ├───elements
    ├───generic
    ├───objects
    ├───settings
    ├───tools
    └───trumps
```

## Herramientas y modulos usados

- Simple. Robust. Responsive. Flexible. Built with Sass.

  http://gridlex.devlint.fr

- Icons: Access over 900 material system icons, available in a variety of sizes and densities, and as a web font.

  https://material.io/icons

- Material Design components for Angular

  https://material.angular.io

## Screenshots

![Login Form](/src/assets/images/example/login-form.jpg)

![Home admin page](/src/assets/images/example/home.jpg)

![Todo page](/src/assets/images/example/todo-interface.jpg)

## License

This project is licensed under the MIT license, Copyright (c) 2017 Gustavo Gutiérrez. For more information see LICENSE.md
