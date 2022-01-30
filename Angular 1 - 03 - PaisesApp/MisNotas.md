# Crear Proyecto
Estructura:
carpeta shared (Todos los componentes que se van a utilizar en toda la app)
carpeta app -> pais (Componente grande que se pueda usar de manera individual)

1º Crear estructura.
2º Importar modulos uno para shared y otro para pais o la que sea.
3º Crear los componentes pages o sidebar etc...
4º Exportarlos en el módulo para que se puedan usar........

Ejemplo:
ng g m shared
ng g c shared/sidebar
entrar modulo shared y exportar sidebar si se va a usar fuera del modulo.

Finalmente importar los modulos en app.modules.ts

# Definir rutas


# Estudiamos las diferentes partes de la aplicación.
Módulos: Representan un conjunto que puede representar algo individualmente. Y los importamos en el módulo principal.
- En este caso:
    - País:
        - Buscar y mostrar *países* por diferentes criterios.
    - Router:
        - AppRoutinModule.
    - Http peticiones a la API:
        - HttpClienteModule
    - Shared:
        - Conjunto de modulos y componentes usados por toda la app.
- En cada módulo hay que definir (ejemplo países):
    - Componentes:
        - Buscador
        - Mostrar
    - Interfaz:
        - País
    - Pages:
        - Por capital
        - Por region
        - Por x
    - Services:
        - Peticiones http que usa el módulo.


# Instalar Angular con Angular Cli
https://angular.io/cli
ng new my-first-project
cd my-first-project
ng serve