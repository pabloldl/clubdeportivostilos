# Club Deportivo S'tilos

Landing independiente creada con HTML5, CSS3 y JavaScript vanilla. Dirección visual **Black / Red Performance**: portada fotográfica, tipografía condensada, manifiesto asimétrico, mosaicos editoriales y contacto de gran presencia tipográfica. No requiere instalación, compilación ni frameworks.

## Abrir el proyecto

Abre esta carpeta en VS Code y utiliza **Open with Live Server** sobre `index.html`. También puedes abrir el HTML directamente; la copia del teléfono dispone de un mecanismo alternativo cuando Clipboard API no está disponible. Si el navegador bloquea ambas opciones, aparece el número para copiarlo manualmente.

Los recursos se sirven desde rutas relativas. Fotografías y tipografías están guardadas localmente; no se realizan peticiones a bancos de imágenes, fuentes, mapas integrados ni herramientas de analítica. Google Maps se abre solo al pulsar «Cómo llegar».

## Archivos

```text
club-deportivo-stilos/
├── index.html
├── css/style.css
├── js/script.js
├── img/                 Fotografías WebP, fuentes y sus licencias
├── favicon.svg
├── .gitignore
└── README.md
```

La carpeta local `.qa/`, ignorada por Git, conserva capturas y resultados de comprobación. No es necesaria para utilizar la web.

## Información del negocio

Datos facilitados en el encargo: Club Deportivo S'tilos; Calle Rda., 17, 11670 El Bosque, Cádiz; teléfono **661 634 663** (`tel:+34661634663`). Se reproducen sin atribuir horarios, precios, actividades específicas, instalaciones, reseñas, personal o perfiles sociales no confirmados.

La identidad tipográfica S'TILOS y el favicon son propuestas provisionales, no una marca oficial aprobada. Las fotografías son ilustrativas y no muestran el club, sus socios, sus equipos ni sus actividades disponibles. Esta distinción se indica en la portada, en las secciones editoriales y en el pie de página.

## Fotografías y licencias

Selección y descarga: **21 de octubre de 2026**. Todas las imágenes proceden de **Pexels**, bajo la [licencia Pexels](https://www.pexels.com/license/), que permite uso comercial y modificación sin atribución obligatoria. Las imágenes se utilizan como contenido editorial ilustrativo, sin sugerir que sus autores o las personas retratadas avalen al club. No se ha utilizado material de otras landings.

Cada enlace de origen identifica la fotografía por su ID en Pexels. Descarga original mediante `https://images.pexels.com/photos/ID/pexels-photo-ID.jpeg`, con redimensionado del proveedor; conversión local a WebP con calidad 84 %. El tratamiento monocromo se aplica en CSS para mantener la coherencia visual y evitar colores ajenos a la paleta.

| Archivo local | Contenido ilustrativo | Origen | Licencia |
| --- | --- | --- | --- |
| `img/hero.webp` | Preparación de levantamiento con barra | [Pexels 841130](https://www.pexels.com/photo/841130/) | Pexels |
| `img/discos.webp` | Barra y discos sobre suelo deportivo | [Pexels 949131](https://www.pexels.com/photo/949131/) | Pexels |
| `img/movimiento.webp` | Hilera de mancuernas | [Pexels 4162451](https://www.pexels.com/photo/4162451/) | Pexels |
| `img/fuerza.webp` | Detalle de mancuernas | [Pexels 6389886](https://www.pexels.com/photo/dumbbells-in-close-up-photography-6389886/) | Pexels |
| `img/cultura-movimiento.webp` | Personas entrenando con cuerdas | [Pexels 1552242](https://www.pexels.com/photo/1552242/) | Pexels |
| `img/constancia.webp` | Mujer realizando una flexión | [Pexels 4162487](https://www.pexels.com/photo/4162487/) | Pexels |
| `img/galeria-barra.webp` | Deportista con barra, de espaldas | [Pexels 2261485](https://www.pexels.com/photo/person-lifting-barbell-indoors-2261485/) | Pexels |
| `img/galeria-mancuernas.webp` | Mancuernas de entrenamiento | [Pexels 2652236](https://www.pexels.com/photo/dumbbells-2652236/) | Pexels |
| `img/galeria-ejercicio.webp` | Ejercicio con mancuernas sobre un cajón | [Pexels 4587371](https://www.pexels.com/photo/a-woman-using-a-dumbbells-in-the-gym-4587371/) | Pexels |
| `img/galeria-manos.webp` | Manos sujetando una barra | [Pexels 6922157](https://www.pexels.com/photo/close-up-of-person-using-gym-equipment-6922157/) | Pexels |
| `img/galeria-material.webp` | Discos de pesas | [Pexels 6389853](https://www.pexels.com/photo/weight-plates-in-close-up-shot-6389853/) | Pexels |
| `img/galeria-ambiente.webp` | Ambiente de entrenamiento junto a ventanales | [Pexels 1954524](https://www.pexels.com/photo/1954524/) | Pexels |

Las 12 fotografías son distintas y se muestran una sola vez cada una en la página. Las imágenes de Open Graph reutilizan únicamente la referencia a la portada para las vistas previas.

## Tipografías

**Barlow Condensed ExtraBold** para titulares y propuesta de logotipo; **Barlow Regular / SemiBold** para textos. Fuentes locales procedentes de Google Fonts, distribuidas bajo **SIL Open Font License 1.1**. Textos de licencia conservados en `img/OFL-Barlow.txt` y `img/OFL-BarlowCondensed.txt`. Fuentes originales: [Barlow](https://github.com/google/fonts/tree/main/ofl/barlow) y [Barlow Condensed](https://github.com/google/fonts/tree/main/ofl/barlowcondensed).

## Funcionalidad, SEO y accesibilidad

- Menú móvil con estado ARIA, cierre al navegar, cierre con Escape, control de foco y adaptación al cambiar de ancho.
- Llamadas con enlace `tel:`, dirección en Google Maps y botón de copia con confirmación accesible.
- HTML semántico, un único H1, enlace para saltar al contenido, textos alternativos y foco visible.
- Scroll fluido, revelados mediante IntersectionObserver y animaciones ligeras. `prefers-reduced-motion` desactiva el movimiento. El contenido sigue accesible sin JavaScript.
- Título y descripción de SEO local, Open Graph y datos estructurados `SportsActivityLocation`, sin valoraciones ni servicios inventados.
- No se define URL canónica ni `og:url` porque no se ha facilitado dominio definitivo. `og:image` es relativo, coherente con la entrega local; algunos validadores sociales requerirán una URL absoluta para generar la tarjeta.

## Control de calidad

Comprobaciones en Google Chrome headless, con capturas, a **375, 768, 1440 y 1920 px**. Resultados y capturas conservados en `.qa/`. La barra vertical del navegador ocupa 15 px dentro del ancho indicado.

Se comprueban anchura del documento, elementos fuera del viewport, carga de fotografías, destinos de anclas, enlaces telefónicos y dirección de Maps; menú móvil, Escape y teclado; escritura y lectura real del portapapeles; movimiento reducido; contenido y contacto sin JavaScript; y errores de ejecución. Auditoría automática de accesibilidad con axe-core 4.10.3 para reglas WCAG 2 A/AA y WCAG 2.1 A/AA. La auditoría automatizada no sustituye la revisión humana de los textos sobre fotografías.

Resultado final: sin desbordamientos en los cuatro anchos, fotografías cargadas, anclas válidas, teléfono y dirección correctos en los enlaces, menú y portapapeles operativos y ningún error JavaScript registrado. Axe: **0 infracciones detectadas y 22 reglas superadas** en la revisión móvil; el contraste sobre fotografías requiere revisión humana y se ha revisado visualmente. Los enlaces de llamada y Maps se validan por su destino; no se realiza una llamada real ni se comprueba una ruta física. Recursos locales comprobados también por existencia y fotografías verificadas mediante SHA-256 para descartar archivos duplicados.

Revisadas las otras landings disponibles en el directorio superior antes de diseñar. No se modifican. Paleta sin verde ni amarillo neón; imágenes renderizadas en escala de grises. No se añaden configuraciones de Netlify.
