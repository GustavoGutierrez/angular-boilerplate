# ANGULAR BOILERPLATE

Proyecto base para iniciar cualquier proyecto con Angular >= 4.3 usando Redux para manejar el estado y flujo de los datos dentro de su aplicación se intenta mantener un estándar y mejores prácticas haciendo uso de immutables, programación funcional; con librerías como: ramda js, lodash/fs immutable JS, tassign, etc.

Este proyecto ofrece una estructura base organizada e intuitiva para el inicio de cualquier proyecto SPA complejo. proponiendo el uso de la immutabilidad con la programación funcional para hacer a nuestros proyectos fácilmente escalables y predecible tanto en Javascript como en CSS; En css se implementa una arquitectura escalable y mantenible con el uso de de ITCSS [http://itcss.io](http://itcss.io/).

## Estructura de aplicación

- src
  * app
    - core
      * guard
      * layout
      * navbar
      * core-routing.module.ts
      * core.module.ts
    - shared
      * components
      * directives
      * pipes
      * app.config.ts
      * shared.module.ts
    - public
      * login
    - admin
      * dashboard
      * tasking -> sample module please delete 
      * admin-routing.module.ts
      * admin.module.ts
  * assets
  * enviroments
  * scss
    - settings
    - tools
    - generic
    - elements
    - objects
    - components
    - trumps
    - styles.scss
  * main.ts
  * test.ts
  * polyfills.ts
  * typings.ts
  * tsconfig.app.json
  * tsconfig.spec.json
  * favicon.ico
  * index.html


## Recursos
* [Recursos utiles](./docs/resources.md)
