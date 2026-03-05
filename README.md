# Fiber The Andes - Web Corporativa

Este repositorio contiene el código fuente del sitio web corporativo de **Fiber The Andes**, un Carrier de IP y proveedor de telecomunicaciones.

## 🚀 Tecnologías
* **HTML5:** Estructura semántica.
* **CSS3:** Estilos personalizados, diseño Responsive (Mobile First/Desktop), Flexbox y CSS Grid.
* **JavaScript (Vanilla):** Lógica para el formulario de contacto y animaciones simples.
* **FontAwesome:** Iconografía.
* **Google Fonts:** Tipografía (Montserrat).

## 📂 Estructura del Proyecto
* `/img`: Recursos gráficos (Logos, íconos, fondos).
* `/marcas`: Logos de clientes y aliados.
* `index.html`: Página de inicio (Landing).
* `contacto.html`: Formulario de contacto y mapa.
* `servicios.html`: Detalle de servicios (Internet dedicado, L2L, etc.).
* `quienes-somos.html`: Historia y valores de la empresa.
* `styles.css`: Hoja de estilos global.

## 📱 Características de Diseño (Responsive)
El sitio está optimizado para adaptarse a cualquier dispositivo. Los puntos de quiebre (Breakpoints) principales son:

* **Escritorio (> 1024px):** Menú horizontal, video de fondo completo.
* **Tablets/Laptops Pequeñas (max 1024px):** * El menú de navegación se reordena debajo del logo.
    * El número de contacto se simplifica.
* **Móviles (max 768px):**
    * Menú en cuadrícula 2x2 para facilitar el tacto.
    * El video de fondo usa `object-fit: cover` para cubrir la altura completa del celular.
    * Grillas de servicios pasan a 1 sola columna.

## 🛠️ Ajustes Recientes (Versión Actual)
* **Fix de Navegación Móvil:** Se implementó un Grid 2x2 para que los enlaces "Inicio", "Sobre Nosotros", "Servicios" y "Contacto" sean accesibles sin romper el diseño.
* **Video Hero:** Corrección de `object-position` para centrar el video en dispositivos verticales.
* **Header Compacto:** Ajuste de paddings y tamaños de iconos para evitar desbordamientos en pantallas de 360px.

## ⚠️ Notas de Despliegue
Este proyecto se despliega automáticamente mediante **Azure Static Web Apps** cuando se hace un push a la rama `main`.