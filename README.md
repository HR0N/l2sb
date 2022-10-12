# small base 🎮 👾 




<img src="./.idea/logo/React%20logo.png" alt="React logo" style="width: 420px"/>

## React 🤖 
- npx create-react-app front
- npm i --save-dev sass
- npm i react-router-dom axios redux react-redux redux-thunk react-localization h-bootstrap validator --save
- npm i react-helmet-async --save
- npm run start || yarn start
- npm run build
- axios.defaults.withCredentials = true;
##### Optional
- npm install jquery --save
- npm i h-bootstrap
- npm i bootstrap
- npm i i18next react-i18next i18next-http-backend i18next-browser-langu^Xagedetector --sa
#### Deploy
- check .htaccess
- create .env > put in: GENERATE_SOURCEMAP=false
##### React Font Awesome
- npm i --save @fortawesome/fontawesome-svg-core
- npm install --save @fortawesome/free-solid-svg-icons
- npm install --save @fortawesome/react-fontawesome
###### Examples
- import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";
- import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
- <FontAwesomeIcon className={`faCaretLeft`} icon={faCaretLeft}/>
- // shadow for SVG => filter: drop-shadow(1px 1px 2px black);
##### moment.js
link - momentjs.com/docs/#/displaying/difference/



<img src="./.idea/logo/Laravel%20logo3.png" alt="Laravel logo" style="width: 420px"/>

## Laravel 🎃
- composer create-project laravel/laravel back
- composer global require laravel/installer
- laravel new example-app
- npm i
- php artisan migrate
- composer require laravel/ui
- php artisan ui:auth
- php artisan serve
- php artisan migrate
- 
- php artisan config:cache
- php artisan cache:clear
- php artisan config:clear
- php artisan make:model EXAMPLE -m
- php artisan make:controller EaxampleController --api
- php artisan make:migration create_example_table
- php artisan migrate
- php artisan route:list
##### for register verify
- next https://stackoverflow.com/questions/65285530/laravel-8-rest-api-email-verification
- set .env | example: FRONT_URL=https://example.com
##### Settings
- back > config > cors.php > 'allowed_origins' => ['https://example.com'],
- back > config > cors.php > 'supports_credentials' => true,
#### Deploy
- check both .htaccess: root, public
#### Problems
##### Can't install laravel using composer
- composer create-project laravel/laravel example --ignore-platform-req=php
##### Can't migrate [SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long;]
open config/database.php, then
 replace it: 'engine' => null', with it: 'engine' => 'InnoDB ROW_FORMAT=DYNAMIC',
 then php artisan config:cache	




<img src="./.idea/logo/Sanctum%20logo.png" alt="Sanctum logo" style="width: 420px"/>

## Sanctum 👽
- open Kernel, realise it: \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
- composer require laravel/ui
- php artisan ui:auth
- config/cors: 'supports_credentials' => true,
- also check axios: axios.defaults.withCredentials = true;

