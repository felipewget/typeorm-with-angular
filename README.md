# typeorm-with-angular
This is a API NodeJS using TypeORM, Angular and PostgreSQL

### Description

It's possible research Farmers by Document or Name with autocomplete and farmer's list

.. add image

### Technologies

* PostgreSQL
* Javascript/Typescript
* NodeJS
* TypeORM
* Angular 7
* CSS

### Dependencies

* PostgreSQL
* NodeJS ( with nvm to change version of your Node easily )
* TypeORM
* Angular 7
* CSS
* Ts Node ( npm i ts-node -g or add yarn ts-node global )

### Running the Project

1 - To clone this repo to you desk

```sh
$ git clone https://github.com/felipewget/typeorm-with-angular
```

2 - Start your PostgreSQL and create a Database, for example databasee "Farmers"

3 - Look the project, there are 2 folders, backend and frontend, we'll start with backend and after, frontend
* BackEnd
    * Open file "ormconfig.json" and fill fields: "host", "port", "username", "password", "database" with your PostgreSQL data access.
    * Open two terminals, width um we will start our back-end and other we will to run migrations to populate samples in SGBD.
        * Terminal 1: let's go to "backend/" folder and run "npm i" or "yarn i" to install dependencies
        
        ```sh
        $ npm i or yarn i
        ```
        * Terminal 1: still inside into "backend/", run "npm run dev", this command will to create our TABLES in Postgresql and to start our backend server on PORT 3333.

        ```sh
        $ npm run dev
        ```

        * Terminal 2: with server running in terminal 1, go to "backend/" in terminal 2 and run "ts-node ./node_modules/.bin/typeorm migration:run"

        ```sh
        ts-node ./node_modules/.bin/typeorm migration:run
        ```

        * Important: Check your server and records on SGBD

* FronEnd
    * Go to folder "frontend/"
    * run "npm i" or "yarn install" to install dependencies
    
    ```sh
    $ npm i or yarn i
    ```

    * run "ng serve" and your client server will to start

    ```sh
    $ ng serve
    ```

    * access the address: http://localhost:4200, the cors config in backend its OK to this URL

    ```sh
    $ http://localhost:4200
    ```
    
### Videos Installing and using the project

### Images