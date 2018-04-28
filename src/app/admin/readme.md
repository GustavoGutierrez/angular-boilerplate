# MÓDULOS DE ADMINISTRACIÓN

**(PRIVADOS O PROTEJIDOS)**
Esta carpeta contiene todos los módulos o componentes usados para la administración de la aplicación los cuales solo son visibles para los usuarios autentificados o que son exclusivos para administrar los recursos de la aplicación.

Aquí puede crear módulos, componentes, servicios, directivas; para encapsular toda la funcionalidad requerida para la administración.

## Estructura del modulo Admin

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

**Nota:** Todos los componentes relacionados con las páginas de la aplcación y admin deben ser creados en la carpeta containers
