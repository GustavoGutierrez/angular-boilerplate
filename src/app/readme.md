# ESTRUCTURA DE LA APLICACIÓN

Esta estructura de organización de módulos permite optimizar la carga mediante lazyload, permite hacer predecible el flujo jerárquico de sus diferentes componentes y módulos así como también el flujo de los datos mediante la implementación de ngrx/store y proponiendo la inmutabilidad de los mismos haciendo de este modo la aplicación fácilmente testiable y mantenible mediante la separación de la estructura de los datos de la lógica de negocio.

## **core**

Esta carpeta contiene componentes globales del layout o shell de la aplicación, además de navbars o cualquier función global o necesaria para la interacción con la interface layout de la aplicación, los servicios que controlan la disponibilidad de las diferentes vistas u opciones de menú específicas para el role o permisos del cliente.

Contiene la siguiente estructura inicial de carpetas y archivos:

```console
├── common
├── containers
│   ├── index.ts
│   ├── page-not-found
│   │   ├── page-not-found.component.html
│   │   ├── page-not-found.component.scss
│   │   ├── page-not-found.component.spec.ts
│   │   └── page-not-found.component.ts
│   └── shell
│       ├── shell.component.html
│       ├── shell.component.scss
│       ├── shell.component.spec.ts
│       └── shell.component.ts
├── core.module.ts
├── core-routing.module.ts
├── index.ts
├── interceptors
│   ├── index.ts
│   └── progress.interceptor.ts
├── readme.md
├── services
│   ├── index.ts
│   ├── login.service.ts
│   └── progress-bar.service.ts
└── store
    ├── actions
    │   ├── index.ts
    │   ├── login.actions.ts
    │   ├── router.actions.ts
    ├── core.store.ts
    ├── effects
    │   ├── index.ts
    │   ├── login.effect.ts
    │   ├── router.effect.ts
    ├── index.ts
    ├── reducers
    │   ├── index.ts
    │   ├── login.reducer.ts
    │   ├── router.reducer.ts
    └── selectors
        ├── index.ts
        ├── login.selectors.ts
        ├── router.selectors.ts
```

## **shared**

Esta carpeta contiene el módulo de recursos compartidos tales como componentes, directivas, pipes, servicios y todo lo que se pueda reutilizar en múltiples módulos y/o componentes de la aplicación y son por lo general de carácter públicos sin restricciones de uso en cualquier parte del sistema.

Contiene la siguientes estructura inicial:

```console
shared
├── components
│   ├── index.ts
│   └── show-errors
│       ├── show-errors.component.spec.ts
│       └── show-errors.component.ts
├── directives
│   ├── hidden.directive.ts
│   └── index.ts
├── index.ts
├── modules
│   ├── index.ts
│   └── material
│       └── material.module.ts
├── pipes
│   ├── capitalize-first.pipe.spec.ts
│   ├── capitalize-first.pipe.ts
│   └── index.ts
├── shared.module.ts
├── utils
│   ├── data.utils.ts
│   └── index.ts
└── validators
    ├── age.validator.spec.ts
    ├── age.validator.ts
    └── index.ts
```

## **public**

Esta carpeta contiene todos los módulos y componentes que serán públicos en la aplicación tales como páginas públicas a las cuales pueden acceder sin autorización o identificación algunos ejemplos de componentes de esta carpetas son: LoginComponent, AboutComponente, HomeComponent, etc.

Contiene la siguientes estructura inicial:

```console
public
├── components
├── containers
│   ├── index.ts
│   ├── layout
│   │   ├── layout.component.html
│   │   ├── layout.component.spec.ts
│   │   └── layout.component.ts
│   └── login
│       ├── login.component.html
│       ├── login.component.scss
│       ├── login.component.spec.ts
│       └── login.component.ts
├── models
│   ├── auth.model.ts
│   ├── index.ts
│   └── login-form.model.ts
├── public.module.ts
├── public-routing.module.ts
└── readme.md
```

## **admin**

Esta carpeta contiene todos los Módulos, Componentes, Servicios, Rutas, entro otros que solo pueden ser accedidos mediante autorización o con algún nivel de acceso del usuario (canActivate definido en core-routing.module) dentro de la aplicación.

Ha de notarse que esta carpeta por lo general contiene la lógica principal de negocio así como la funcionalidad de la aplicación.

Un ejemplo de estructura con que se inicia dentro de esta carpeta es:

```console
admin
├── admin.module.ts
├── admin-routing.module.ts
├── components
│   ├── index.ts
│   ├── navbar
│   │   ├── navbar.component.html
│   │   ├── navbar.component.scss
│   │   ├── navbar.component.spec.ts
│   │   └── navbar.component.ts
│   └── readme.md
├── containers
│   ├── dashboard
│   │   ├── dashboard.component.html
│   │   ├── dashboard.component.scss
│   │   └── dashboard.component.ts
│   ├── index.ts
│   ├── layout
│   │   ├── layout.component.html
│   │   ├── layout.component.scss
│   │   ├── layout.component.spec.ts
│   │   └── layout.component.ts
│   ├── readme.md
│   └── task
│       ├── task.component.html
│       ├── task.component.scss
│       └── task.component.ts
├── guards
│   ├── admin.guard.ts
│   └── index.ts
├── interceptors
│   ├── index.ts
│   ├── timing.interceptor.ts
│   ├── token.interceptor.spec.ts
│   └── token.interceptor.ts
├── models
│   ├── index.ts
│   └── task.model.ts
├── readme.md
└── services
    ├── base.service.ts
    ├── index.ts
    └── todo.service.ts
```
