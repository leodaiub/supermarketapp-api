# SuperMarketApp

## Fullstack app developed by me from scratch using React.js in the front-end, Node.js in the backend and MongoDB in the database.

This is and RESTful API wich can perfom full CRUD's( create, read, update, delete ).

The API can be acessed on the following url: https://supermarketappapi.leonardodaiub.com/

##### GET REQUEST

Performing a GET request on the root URL will return all the records from the database.
```
GET: https://supermarketappapi.leonardodaiub.com/
```
##### GET REQUEST BY ID

Performing a GET request on with the params /market/:id will return a specific record from the database by it's ID.
```
GET: https://supermarketappapi.leonardodaiub.com/market/:id
```
##### POST REQUEST

Performing a POST request to /market with the Form Data containing the data of the Super Market and it's images.

below is an example of a request
```
POST: https://supermarketappapi.leonardodaiub.com/market
```
##### PUT REQUEST

Performing a PUT request to /market:id with the Form Data containing the data updated fields of the Super Market.
```
PUT: https://supermarketappapi.leonardodaiub.com/market/:id
```
##### DELETE REQUEST BY ID

Performing an DELETE request with the params /market/:id will delete the specific record by it's ID.
```
DELETE: https://supermarketappapi.leonardodaiub.com/market/:id
```
