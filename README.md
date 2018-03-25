# ANGULAR BOILERPLATE

Proyecto base para iniciar cualquier proyecto con Angular >= 4.3 usando Redux para manejar el estado y flujo de los datos dentro de su aplicación se intenta mantener un estándar y mejores prácticas haciendo uso de immutables, programación funcional; con librerías como: ramda js, lodash/fs immutable JS, tassign, etc.

Este proyecto ofrece una estructura base organizada e intuitiva para el inicio de cualquier proyecto SPA complejo. proponiendo el uso de la immutabilidad con la programación funcional para hacer a nuestros proyectos fácilmente escalables y predecible tanto en Javascript como en CSS; En css se implementa una arquitectura escalable y mantenible con el uso de de ITCSS [http://itcss.io](http://itcss.io/).

- Best practices in file and application organization for Angular.
- Ahead of Time (AoT) compile for rapid page loads of your production builds.
- Tree shaking to automatically remove unused code from your production bundle.
- Testing Angular code with Jasmine and Karma.
- Coverage with Istanbul and Karma
- End-to-end Angular code using Protractor.
- Type manager with @types
- Angular 5 support via changing package.json and any future Angular versions

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
