# README

# shopify-challenge

Thank you for visiting my Shopify Assessment for the Production Engineer Intern opportunity!

This web application was built using Ruby-on-Rails for the back-end and React.js for the front-end.
The database is built on PostgreSQL.

It is the inventory of a generic toys and games shop.

To launch this application:

- First clone this repository to your local environment.

- If you don't have it already, download PostgreSQL:
    -  https://www.postgresql.org/

- We will check your version of Ruby, enter in your terminal:
```
$ ruby -v
```

- If you have version 2.7.4, skip to next step, otherwise, in your terminal:
```
$ rvm install 2.7.4 --default
```

- Check your version of ruby's bundler and rails:
```
$ gem install bundler
$ gem install rails
```

- Next we will check your version of NPM:
```
$ node -v
```

- If your version is not 16.x.x, enter in your terminal:
```
$ nvm install 16
$ nvm use 16
$ nvm alias default 16
```

- For troubleshooting problems with Ruby or Node.js:
    - Node: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
    - Ruby: https://guides.rubyonrails.org/getting_started.html

- Open the cloned repo in your code editor.

- In the terminal run these commands:
```
$ bundle install
$ npm install --prefix client
```

- Start your Postgres Server

- To finalize database setup:
```
$ rails db:create
```

- Open a second terminal window and enter each line in seperate windows:
```
$ rails s
$ npm start --prefix client
```

- Explore at your leisure!
