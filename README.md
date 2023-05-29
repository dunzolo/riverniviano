<h1 align="center">💚 Torneo RiverNiviano 💙</h1>
<p align="center">
    Elenco partite suddivise per categoria con rispettive classifiche e risultati
</p>
<p align="center">
 <img src="https://github.com/dunzolo/riverniviano/assets/112269790/9ed97e2d-8fba-4464-9a9c-009a15dc0b25.png" alt="riverniviano-layout" width="80%">
</p>

<h3>⚙️ Funzionalità:</h3>
1. Filtro di ricerca per categoria

	- `php artisan migrate`
	- `php artisan db:seed`

3. Inizializza la repository installando i pacchetti e configurandola con le tue impostazioni:
    
    - `composer install` 
    - `npm install` 
	- `cp .env.example .env` 
	- `php artisan key:generate`
     
3. Collega il tuo database e lancia le [migrations](database/migrations) e i [seeder](database/seeds): 
	- `php artisan migrate`
	- `php artisan db:seed` 
4. Crea il collegamento alla cartella [storage](storage): 
	- `php artisan storage:link` 
5. Lancia il sito: 
	- `npm run watch` 
	- `php artisan serve`

<h3>🎥 Preview<h3>
<img src="https://user-images.githubusercontent.com/112269790/226676535-caa93390-d1ae-42ed-a966-2c2cbfbb3037.gif" alt="spotify-layout-preview" width="100%">

<h3>⛏️ Built With</h3>
<div align="left">

|Page structure|Page style|
|----|----|
|<p align="center"><a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"><img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/></a></p>|<p align="center"><a href="https://www.w3.org/TR/CSS/#css"><img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/></a></p>
 
</div>

 <hr/>
 <p align="center">
  <img src="https://img.shields.io/badge/version-2023--03--21-blue" alt="version"/>
 </p>

# How to run
## Local work
- npm run dev

## Build work
- npm run build
- git add dist -f
- git commit -m "nome_del_commit"
- git subtree push --prefix dist origin gh-pages 
