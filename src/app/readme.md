# ESTRUCTURA DE LA APLICACIÓN

Esta estructura de organización de módulos permite optimizar la carga mediante lazyload, permite hacer predecible el flujo jerárquico de sus diferentes componentes y módulos así como también el flujo de los datos mediante la implementación de ngrx/store y proponiendo la inmutabilidad de los mismos haciendo de este modo la aplicación fácilmente testiable y mantenible mediante la separación de la estructura de los datos de la lógica de negocio.

## **core**

Esta carpeta contiene componentes del layout o shell de la aplicación, además de navbars o cualquier función global o necesaria para la interacción con la interface layout de la aplicación, los servicios que controlan la disponibilidad de las diferentes vistas u opciones de menú específicas para el role o permisos del cliente.

Contiene la siguiente estructura inicial de carpetas y archivos:

* **guard**

* **layout**

* **navbar**

* **store**

* **core-routing.module.ts**

* **core.module.ts**

## **shared**

Esta carpeta contiene el módulo de recursos compartidos tales como componentes, directivas, pipes, servicios y todo lo que se pueda reutilizar en múltiples módulos y/o componentes de la aplicación y son por lo general de carácter públicos sin restricciones de uso en cualquier parte del sistema.

Contiene la siguientes estructura inicial:

* **components**

* **directives**

* **pipes**

* **shared.module.ts**

## **public**

Esta carpeta contiene todos los módulos y componentes que serán públicos en la aplicación tales como páginas públicas a las cuales pueden acceder sin autorización o identificación algunos ejemplos de componentes de esta carpetas son: LoginComponent, PageNotFoundComponent, AboutComponente, HomeComponent, etc.

Contiene la siguientes estructura inicial:

* **components**

* **models**

* **services**

## **admin**

Esta carpeta contiene todos los Módulos, Componentes, Servicios, Rutas, entro otros que solo pueden ser accedidos mediante autorización o con algún nivel de acceso del usuario (canActivate definido en core-routing.module) dentro de la aplicación.

Ha de notarse que esta carpeta por lo general contiene la lógica principal de negocio así como la funcionalidad de la aplicación.

Un ejemplo de estructura con que se inicia dentro de esta carpeta es:

* **components**

* **guards**

* **models**

* **services**

* **store**

* **admin-routing.module.ts**

* **admin.module.ts**
