# ANGULAR BOILERPLATE

Proyecto base para iniciar cualquier proyecto con Angular >= 4.3 usando Redux para manejar el estado y flujo de los datos dentro de su aplicación se intenta mantener un estándar y mejores prácticas haciendo uso de immutables, programación funcional; con librerías como: ramda js, lodash/fs immutable JS, tassign, etc.

Este proyecto ofrece una estructura base organizada e intuitiva para el inicio de cualquier proyecto SPA complejo. proponiendo el uso de la immutabilidad con la programación funcional para hacer a nuestros proyectos fácilmente escalables y predecible tanto en Javascript como en CSS; En css se implementa una arquitectura escalable y mantenible con el uso de de ITCSS [http://itcss.io](http://itcss.io/). 


## ESTRUCTURA DE LA APLICACIÓN

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


A continuación puede ver los componentes, modulos y librerias usados ademas de una serie de componentes y modulos utiles que pueda necesitar instalar en su proyecto tales como notificaciones, datagrids, pipes, etc.

# COMPONENTS

## Awesome Angular Components
https://github.com/brillout/awesome-angular-components

## Web Notifications
https://github.com/alexcastillo/ng2-notifications

## Ng2 Easy TaBLE
http://angular2-table.espeo.pl

## Ngx Fullpage
https://github.com/meiblorn/ngx-fullpage

## Angular2 Schema Form
Angular2 Schema Form is an Angular2 module allowing you to instanciate an HTML form from a JSON schema.
https://github.com/makinacorpus/angular2-schema-form


# DIRECTIVES

## Ng2 Fontawesome
https://github.com/seiyria/ng2-fontawesome


# PIPES
angular-pipes is a pipes library for Angular.
https://fknop.gitbooks.io/angular-pipes/


# LIBRARIES

## Ramda
Ramda has a more focused goal. We wanted a library designed specifically for a functional programming style, one that makes it easy to create functional pipelines, one that never mutates user data.
http://ramdajs.com


# REDUX
https://github.com/xgrommx/awesome-redux

## Flux standard actions
https://github.com/acdlite/flux-standard-action

```
{
  type: 'ADD_TODO',
  payload: new Error(),
  error: true
}
```

### Redux store (ngRedux)
https://angular-redux.github.io/store/


## Middlewares

### Redux Local Storage
https://github.com/elgerlambert/redux-localstorage
```js
 yarn add redux-localstorage
```

### Redux Session Storage
https://github.com/ilyagelman/redux-sessionstorage
```js
 yarn add redux-sessionstorage
```

### Redux Logger
https://github.com/evgenyrodionov/redux-logger

### Redux Saga
redux-saga is a library that aims to make side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.

https://redux-saga.js.org/


### Redux Catch
Error catcher middleware for Redux reducers and sync middlewares.
https://github.com/PlatziDev/redux-catch


# ESTANDAR DE IMPLEMENTACIÓN DE ACTIONS

An action MUST

- be a plain JavaScript object.
- have a `type` property.

An action MAY

- have an `error` property.
- have a `payload` property.
- have a `meta` property.

An action MUST NOT include properties other than `type`, `payload`, `error`, and `meta`.

### `type`

The `type` of an action identifies to the consumer the nature of the action that has occurred. By convention, `type` is usually a string constant or a Symbol. If two types are the same, they MUST be strictly equivalent (using `===`).

### `payload`

The optional `payload` property MAY be any type of value. It represents the payload of the action. Any information about the action that is not the `type` or status of the action should be part of the `payload` field.

By convention, if `error` is `true`, the `payload` SHOULD be an error object. This is akin to rejecting a promise with an error object.

### `error`

The optional `error` property MAY be set to `true` if the action represents an error.

An action whose `error` is true is analogous to a rejected Promise. By convention, the `payload` SHOULD be an error object.

If `error` has any other value besides `true`, including `undefined` and `null`, the action MUST NOT be interpreted as an error.

### `meta`

The optional `meta` property MAY be any type of value. It is intended for any extra information that is not part of the payload.


# INFORMACIÓN ADICIONAL

- Immutable data structures for functional JS | JSConf EU 2017
  * https://www.youtube.com/watch?v=Wo0qiGPSV-s


- Learning Functional Programming with JavaScript - JSUnconf 2016
  * https://www.youtube.com/watch?v=e-5obm1G_FY

- ¿Por qué utilizar Immutable.js?
  * https://www.youtube.com/watch?v=ROTHW9Zk-TE
