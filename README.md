# SuperMarketApp

## Fullstack app developed by me from scratch using React.js in the front-end, Node.js in the backend and MongoDB in the database.

This is an RESTful API wich can perfom full CRUD's( create, read, update, delete ).

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

Below is a example of a request
```
curl --request GET \
  --url http://localhost:3000/market/5d688785c401b931485dece4
```
##### POST REQUEST

Performing a POST request to /market with the Form Data containing the data of the Super Market and it's images.

```
POST: https://supermarketappapi.leonardodaiub.com/market
```

Below is a example of a request
```
curl --request POST \
  --url http://localhost:3030/market \
  --header 'content-type: multipart/form-data; boundary=---011000010111000001101001' \
  --form superMarketName=Carrefour \
  --form superMarketPhone=55114234234 \
  --form 'superMarketDescription=Carrefour anchieta' \
  --form 'superMarketLocation="Av anchieta"' \
  --form superMarketAdditionalImages= \
  --form superMarketAdditionalImages= \
  --form superMarketAdditionalImages=
```
##### PUT REQUEST

Performing a PUT request to /market:id with the Form Data containing the data updated fields of the Super Market.
```
PUT: https://supermarketappapi.leonardodaiub.com/market/:id
```

Below is a example of a request
```
curl --request PUT \
  --url http://localhost:3000/market/5d688785c401b931485dece4 \
  --header 'content-type: application/json' \
  --data ' {
    "superMarketLocation": {
      "number": "String",
      "district": "String",
      "zip": "String",
      "country": "String",
      "city": "String",
      "state": "String"
    },
    "superMarketName": "String2",
    "superMarketPhone": "String2",
    "superMarketDescription": "String2"
 }'
```
##### DELETE REQUEST BY ID

Performing an DELETE request with the params /market/:id will delete the specific record by it's ID.
```
DELETE: https://supermarketappapi.leonardodaiub.com/market/:id
```
Below is a example of a request
```
curl --request DELETE \
  --url http://localhost:3000/market/5d687e28999f861e90510923
```
