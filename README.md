
<h1 align="center"> API </h1>
<p align="center">
<img src="https://img.shields.io/github/issues/oyusti/api">
<img src="https://img.shields.io/github/forks/oyusti/api">
<img src="https://img.shields.io/badge/status-finished-orange">
<img src="https://img.shields.io/github/stars/oyusti?style=social"
</p>


## About API

<p>It is a very simple web application where it is reflected how to connect a third-party application with a web server worked in Laravel.
It is an application with educational purposes due to its level of simplicity. In it you will find the following functionalities:</p>


- Connection with database.
- Use of Eloquent ORM for data handling.
- One-to-many relationship between tables
- Routes created for the web server and api.
- Creation of private API with authentication system.
- Use of classes for the frontend created with tailwinds css.


## Used technology

- Ubuntu 20.04
- Composer
- PHP 8.0.2
- Laravel/framework 9.19
- Tailwindcss
- Mysql 8.0.30
- NodeJS 16.17.0
- NPM 8.15.0
- Postman 9.29
- Git

## How to Install

It is necessary that prior to installation you must have installed PHP, Laravel, Mysql or the relational database of your choice, Composer, NodeJS with NPM

- First, Go to the directory where you want to install and clone the project
In the terminal

   '''
   
        git clone git@github.com:oyusti/api.git
   
   '''
   
In the terminal Enter the directory 

'''
        cd api
'''

- run "composer install" to install dependencies and then "npm install"

'''
composer install
run "npm install
'''
   
- Copy the "env_example" file and create the "env" file

- In your code editor open "env" and put in "DB_DATABASE" the name of your preference for the database.

- Then create that same database in your database manager. If for example you created DB_DATABASE = admin in the "env" file, you would also create a database with the same name.

- In the "env" file you must also modify the parameter "DB_USERNAME" which will be the username to access the database and "DB_PASSWORD" which will be the password.

- In "env" you must also add "APP_KEY" since it will be empty, for this we write in the terminal: 

'''
php artisan key: generate
'''

-In the terminal execute 

'''
php artisan migrate --seed
'''

That is all

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**
- **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
- **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
