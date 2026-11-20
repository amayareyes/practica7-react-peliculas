# Práctica 7 - App de Películas con React

## Integrantes

- Amaya Itzel Reyes Nuñez

- Sofia Abigail Aranda Diaz

**Materia:** Desarrollo de Aplicaciones Web en la Nube y Móviles

**Profesor:** Zeus Emanuel Gutiérrez Cobián

**Calendario escolar:** 2026B

## Objetivo
El objetivo de la practica fue desarrollar una aplicacion web usando Vite, que consumiera la informacion de una API real de peliculas. Mostramos los detalles de cada pelicula incluyendo su poster y visualmente quedo muy bien implementado en nuestra app. Ademas, trabajamos colaborativamente en Github, con mas de 2 commits cada una y finalmente enlazamos nuestro repositorio a Netlify. 

## Tecnologías utilizadas
- React
- Vite
- React Router DOM
- CSS
- API de TMDB
- Git y GitHub
- Netlify

## Estructura del proyecto

```
practica7-react-peliculas/
├── public/
│   ├── favicon.svg
│   └── _redirects          
├── src/
│   ├── components/
│   │   ├── Footer.jsx      
│   │   ├── Footer.css
│   │   ├── MovieCard.jsx   
│   │   ├── MovieCard.css
│   │   ├── MovieGrid.jsx   
│   │   └── MovieGrid.css
│   ├── img/
│   │   ├── escudo-cucei.png
│   │   └── placeholder.png
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── MovieDetails.jsx
│   │   └── MovieDetails.css
│   ├── routers/
│   │   └── AppRouter.jsx
│   ├── services/
│   │   └── httpClient.js
│   ├── utils/
│   │   └── getMovieImg.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx                    
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Instalación y ejecución local
1. Clonar el repositorio.
2. Instalar dependencias con `npm install`.
3. Crear un archivo `.env` en la raíz con esta línea (usamos cada una nuestra propia API key de TMDB):
   `VITE_TMDB_API_KEY=API_key`
4. Correr el proyecto con `npm run dev`.

## Rutas
- `/` : listado de películas.
- `/movies/:movieId` : detalle de una película.

## API utilizada
Usamos la API de TMDB (The Movie Database) para traer la información de las películas. Hacemos dos peticiones:

- `/discover/movie`: trae el listado de la página principal.
- `/movie/{id}`: trae los datos de la película que se abre en el detalle (póster, título, géneros y descripción).

Las peticiones salen de `src/services/httpClient.js`. La API key la guardamos en un archivo `.env` para no subirla a GitHub.

## Funcionamiento
La página principal muestra el listado de películas populares con su póster y título. Al dar clic en una tarjeta se abre el detalle de esa película, con póster, géneros y descripción. Abajo aparece el footer con los datos del equipo.

![Página principal](docs/principal.png)

![Detalle de una película](docs/detalle1.png)

![Detalle de otra película](docs/detalle2.png)

![Footer](docs/footer.png)

## Enlaces
- Repositorio: https://github.com/amayareyes/practica7-react-peliculas
- Netlify: https://practica7-react-peliculas-770z.netlify.app/

## Conclusiones
Con esta práctica logramos armar una app de películas con React y Vite que consume la API de TMDB, muestra un listado y abre el detalle de cada película con React Router. La publicamos en Netlify y la trabajamos en equipo con GitHub, cada una desde su cuenta y en su propia rama.

Lo que más nos costó no fue el código, sino la parte de organización con Git. Tuvimos que resolver conflictos al unir las ramas, porque las dos habíamos creado archivos con el mismo nombre (App.jsx y MovieDetails.jsx), y nos tocó decidir con cuál versión quedarnos. También nos pasó que un commit que creíamos hecho no se había guardado, y aprendimos a revisar con git status y git log antes de subir cambios.

Otra cosa que aprendimos fue a manejar la API key con variables de entorno. La guardamos en un archivo .env que no se sube al repositorio, y en Netlify la configuramos aparte. Además, en el despliegue vimos que Netlify crea los proyectos como privados por defecto, así que tuvimos que cambiar la visibilidad a pública para poder compartir el link.