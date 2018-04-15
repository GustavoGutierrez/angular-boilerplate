# ANGULAR BOILERPLATE

Proyecto base para iniciar cualquier proyecto con Angular >= 5.2.9 usando ngrx para manejar el estado y flujo de los datos de la aplicación manteniendo un estándar en la organización del código e implementa las mejores prácticas actuales de Javascript haciendo uso de immutables, programación funcional.
Con el uso de librerías como: [Ramda](http://ramdajs.com), [Immutable](https://facebook.github.io/immutable-js/), [Tassign](https://www.npmjs.com/package/tassign), etc.

Este proyecto ofrece una estructura base organizada e intuitiva para el inicio de cualquier proyecto SPA complejo. proponiendo el uso de la immutabilidad con la programación funcional para hacer a nuestros proyectos fácilmente escalables y predecible tanto en Javascript como en CSS; En css se implementa una arquitectura escalable y mantenible con el uso de de ITCSS [http://itcss.io](http://itcss.io/).

## Características

- Buenas practicas en la organización de archivos de la aplicación Angular.
- Compilación Ahead of Time (AoT) para rapida carga de páginas para la distribucón.
- Generadores de documentación automatica para el código typescript y sass
- Uso e implementación de @ngrx/effects
- Uso de selectors y features
- Pruebas de codigo Angular con Jasmine y Karma.
- Pruebas de covertura con Istanbul y Karma
- End-to-end de codigo Angular usando Protractor.
- Administración de tipado usando @types
- Soporte de Angular 5.2.9 y control de cambios usando package.json y cualquier nueva caracteristica de versiones de Angular.

## Estructura de Aplicación

```console
src
├── app
│   ├── admin
│   │   ├── components
│   │   │   ├── dashboard
│   │   │   └── todo
│   │   ├── guards
│   │   ├── interceptors
│   │   ├── models
│   │   ├── services
│   │   └── store
│   │       ├── actions
│   │       ├── effects
│   │       ├── reducers
│   │       └── selectors
│   ├── core
│   │   ├── components
│   │   │   ├── layout
│   │   │   ├── navbar
│   │   │   └── page-not-found
│   │   ├── guard
│   │   ├── services
│   │   ├── store
│   │   │   ├── actions
│   │   │   ├── effects
│   │   │   └── reducers
│   │   └── utils
│   ├── public
│   │   ├── components
│   │   │   └── login
│   │   ├── models
│   │   └── services
│   └── shared
│       ├── components
│       │   └── show-errors
│       ├── directives
│       ├── pipes
│       └── validators
├── assets
│   ├── fonts
│   ├── icon
│   └── images
│       └── example
├── docs
├── environments
├── meta
└── scss <- Metodología ITCSS
    ├── components
    ├── elements
    ├── generic
    ├── objects
    ├── settings
    ├── tools
    └── trumps
```

## Herramientas y modulos usados

- Rxjs: An API for asynchronous programming with observable streams

  http://reactivex.io/rxjs

- Gridlex: Simple. Robust. Responsive. Flexible. Built with Sass.

  http://gridlex.devlint.fr

- Icons: Access over 900 material system icons, available in a variety of sizes and densities, and as a web font.

  https://material.io/icons

- Material Design components for Angular

  https://material.angular.io

- SassDoc: a documentation system to build pretty and powerful docs in the blink of an eye.

  http://sassdoc.com

- TypeDoc A documentation generator for TypeScript projects.

  http://typedoc.org

- Awesome Angular: Encuentra más components, pipes, herramients, cursos, etc

  https://github.com/gdi2290/awesome-angular

## Screenshots

**Formulario de login**
![Login Form](/src/assets/images/example/login-form.jpg)

**Home del App**
![Home admin page](/src/assets/images/example/home.jpg)

**Ejemplo Store App**
![Todo page](/src/assets/images/example/todo-interface.jpg)

## License

This project is licensed under the MIT license, Copyright (c) 2017 Gustavo Gutiérrez. For more information see LICENSE.md
