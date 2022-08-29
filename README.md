
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

-   First, Go to the directory where you want to install and clone the project
In the terminal

   
   
        git clone git@github.com:oyusti/api.git
   
   
   
-   In the terminal Enter the directory 



        cd api
        


-   run "composer install" to install dependencies and then "npm install"


        composer install
        npm install

   
-   Copy the "env_example" file and create the "env" file

-   In your code editor open "env" and put in "DB_DATABASE" the name of your preference for the database.

-   Then create that same database in your database manager. If for example you created DB_DATABASE = admin in the "env" file, you would also create a database with the same name.

-   In the "env" file you must also modify the parameter "DB_USERNAME" which will be the username to access the database and "DB_PASSWORD" which will be the password.

-   In "env" you must also add "APP_KEY" since it will be empty, for this we write in the terminal: 


        php artisan key: generate


-   We will now create the tables and records in the database. In the terminal execute 


        php artisan migrate --seed
        
        
-   Remember to always execute the command "npm run dev" in the terminal when starting the server, otherwise you will get an error

        npm run dev


-   Finally remember to install some software to test the API like postman

That is all... Happy Code!

