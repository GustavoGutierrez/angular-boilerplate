# CORE MODULE

Este módulo contiene todas las funcionalidades y componentes relacionados con el layout como pueden ser:

- El layout global de la aplicación
- Menús global de navegación
- Servicios relacionados con la navegación y privilegios (Guard Services)
- El enrutado general de la aplicación (publicos y privados - admin)
- Sidebars, paneles y otros componentes globales del layout
- Store de la aplicación en el cual se crean todas las reducers, actions, selectors ad effects usado en la aplicación. Aplicando la filosofia de redux de un unico store.

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
