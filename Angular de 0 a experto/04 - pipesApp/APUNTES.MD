# Documentación
- Pipes: https://angular.io/api?query=pipe
- PrimeNG: https://www.primefaces.org/primeng/

# PrimeNg
Copiar en el angular.json
            "styles": [
              "src/styles.scss",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeng/resources/themes/vela-blue/theme.css",
              "node_modules/primeng/resources/primeng.min.css"
            ],

# PrimeFlex
/node_modules/primeflex/primeflex.css
https://www.primefaces.org/primeflex/gridsystem

# Para ponerlo en español el locale:
// Cambiar el local de la app
`import localEs from '@angular/common/locales/es';`
`import { registerLocaleData } from '@angular/common';`
`registerLocaleData( localEs ); // Ponerlo bajo en providers`

# Para configuracion local de ngPrime mirar el app.component el constructor
