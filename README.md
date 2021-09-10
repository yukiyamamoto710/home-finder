# Home Finder

## About The Application

It is a simple home address search web app that returns matching houses from a large set of houses.
![Usage](https://media.giphy.com/media/xRaL7HXRkLhu18b5ek/giphy.gif?cid=790b761188b060ab9cda5dcb66091e81fbc84b0596653fb7&rid=giphy.gif&ct=g)

### Built With

* [React](https://reactjs.org/)
* [Express](http://expressjs.com/)
* [MySQL](https://www.mysql.com/)

## Getting Started

1. Fork and clone this repo, then open two terminal tabs and navigate to the root directory.

2. In one of the two seperate terminal tabs run the following script:
  ```
  npm install // install all dependencies
  npm start
  ```

3. In the second terminal tab run:
  ```
  npm run react-dev
  ```

4. (Optional) Install MySQL if your computer does not have one

5. Read ```schema.sql``` by using the following command:
    ```
    mysql -u <USER> < schema.sql
    mysql -u <USER>
    ```
    OR
    ```
    mysql -u <USER> -p < schema.sql
    mysql -u <USER> -p
    ```

6. Convert the CSV file into JSON and store into the MySQL database
  ```
  cd models // navigate to the models directory from the root
  node csvtojson.js // should print the success message
  ```

7. Open your brower and type ```localhost:3001```

## Acknowledgements

* [Redfin](https://www.redfin.com/)
* [CSVTOJSON](https://www.npmjs.com/package/csvtojson)
* [Font Awesome](https://fontawesome.com)
