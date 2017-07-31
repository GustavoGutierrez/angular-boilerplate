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

# RECOMENDACIONES
Usar la guia de estilos de Angular: 
https://angular.io/guide/styleguide

A continuación puede ver los componentes, modulos y librerias usados ademas de una serie de componentes y modulos utiles que pueda necesitar instalar en su proyecto tales como notificaciones, datagrids, pipes, etc.

# UI

## Ngx UI
Note: This project is under heavy construction and is not intended for general production use yet. As such, we are not accepting bugs at the moment and documentation is quite lacking. 

https://github.com/swimlane/ngx-ui


## Ng2-admin
Admin panel framework based on Angular, Bootstrap 4 and Angular CLI
https://github.com/akveo/ng2-admin

# MODULES

## ngx-filesaver
Simple file save with FileSaver.js
```
yarn add ngx-filesaver
```
## doorgets-ng-truncate
Angular 2+ (ngx) ng2 truncate module from Directive, Pipe and Service
```
yarn add doorgets-ng-truncate
```
https://github.com/doorgets/ng-truncate

## Angular Swiper Wrapper
This is an Angular wrapper library for the Swiper.
```
yarn add ngx-swiper-wrapper
```
https://github.com/zefoy/ngx-swiper-wrapper

## Ngx Mask
```
yarn add ngx-mask
```
https://github.com/NepipenkoIgor/ngx-mask

## Resource (REST) Client for Angular 2
https://github.com/troyanskiy/ngx-resource
```
yarn add ngx-resource
```

## Angular 2+ File Uploader
```
yarn add ngx-uploader
```
https://github.com/jkuri/ngx-uploader

http://ngx-uploader.com


# COMPONENTS

## Ngx UI Switch
This is a simple iOS 7 style switch component for Angular4.
```
yarn add ngx-ui-switch
```
https://github.com/webcat12345/ngx-ui-switch

## Ngx Avatar
A universal avatar component for Angular 2+ applications that fetches / generates avatar based on the information you have about the user.
```
yarn add ngx-avatar
```
https://github.com/HaithemMosbahi/ngx-avatar

## Awesome Angular Components
https://github.com/brillout/awesome-angular-components

## Rich Text Editor - ngx-quill
Angular (>=2) component for rich text editor Quill
```
yarn add ngx-quill
```
https://killercodemonkey.github.io/ngx-quill-example


## Perfect Scrollbar
This is an Angular wrapper library for the Perfect Scrollbar.

https://github.com/zefoy/ngx-perfect-scrollbar

## Angular Progressbar
A nanoscopic progress bar. Featuring realistic trickle animations to convince your users that something is happening!
```
yarn add ngx-progressbar
```
https://murhafsousli.github.io/ngx-progressbar/

https://github.com/MurhafSousli/ngx-progressbar

## Tag Input
https://github.com/Gbuomprisco/ngx-chips

http://www.buompris.co/ng2-tag-input/
```
yarn add ngx-chips
```

## Ngx Contextmenu
An Angular component to show a context menu on an arbitrary component
```
yarn add ngx-contextmenu
```
https://github.com/isaacplmann/ngx-contextmenu

## Pagination
The simplest solution for pagination in Angular.
```
yarn add ngx-pagination
```
https://github.com/michaelbromley/ngx-pagination

## Ngx Charts
```
yarn add @swimlane/ngx-charts
```
Documentación: https://swimlane.gitbooks.io/ngx-charts/content/

Repositorio: https://github.com/swimlane/ngx-charts


## Angular2+ PDF Viewer
https://github.com/VadimDez/ng2-pdf-viewer

## Web Notifications
https://github.com/alexcastillo/ng2-notifications

## Ngx Datatable
```
yarn add @swimlane/ngx-datatable
```
https://github.com/swimlane/ngx-datatable

## Ng2 Easy TaBLE
http://angular2-table.espeo.pl

## Ngx Fullpage
https://github.com/meiblorn/ngx-fullpage

## Angular2 Schema Form
Angular2 Schema Form is an Angular2 module allowing you to instanciate an HTML form from a JSON schema.
https://github.com/makinacorpus/angular2-schema-form


# DIRECTIVES

## ng2-handsontable
The Angular2 directive for Handsontable

https://valor-software.com/ng2-handsontable

## ngx-autogrow
Angular directive for automatically height-adjusted textareas that also works within scrolling containers. Based on autogrow.js by Damian Senn.
```
yarn add ngx-autogrow
```
https://github.com/hupf/ngx-autogrow

## Angular Color Picker
A Color Picker Directive for Angular 2 with no dependencies.
```
yarn add ngx-color-picker
```
https://github.com/zefoy/ngx-color-picker

## Ngx Clipboard
```
yarn add ngx-clipboard
```
https://github.com/maxisam/ngx-clipboard

http://embed.plnkr.co/PD4Ap8/

## Ng2 Fontawesome
https://github.com/seiyria/ng2-fontawesome

## Ngx Dnd
Drag, Drop and Sorting Library for Angular4 and beyond!

https://github.com/swimlane/ngx-dnd

## Angular2+ Image Fallback
 
```
yarn add ngx-img-fallback
```
https://github.com/VadimDez/ngx-img-fallback

# PIPES

## ngx-date-fns
date-fns pipes for Angular 2.0 and above.
```
yarn add ngx-date-fns
```
https://github.com/joanllenas/ngx-date-fns

## ngx-pipes
Useful pipes for Angular with no external dependencies
https://github.com/danrevah/ngx-pipes

angular-pipes is a pipes library for Angular.
https://fknop.gitbooks.io/angular-pipes/

## Order By for Array
```
yarn add ngx-order-pipe
```
https://github.com/VadimDez/ngx-order-pipe

## Array Filter
```
yarn add ngx-filter-pipe
```

https://github.com/VadimDez/ngx-filter-pipe


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
