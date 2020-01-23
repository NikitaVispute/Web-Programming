# StyleBee

## Installation

### Setup local database

- Run MongoDB locally
- Create a database named richardson


### Install dependencies

Navigate to the application folder and run the following command

` npm install `

### Run the application

`nodemon`

The application will now run on the browser at http://localhost:3000/


## API's

### GET /items

Returns a list of all items

TODO: Pagination

```json

  {
    "price": {
      "value": 220,
      "currency": "USD",
      "campaign": "None",
      "discount": 0
    },
    "details": {
      "sizes": [
        "xs",
        "s",
        "m",
        "l",
        "xl"
      ],
      "composition": [
        "Polyester 90%",
        "Cotton 20%"
      ],
      "type": [
        "Long Sleeve"
      ],
      "size_type": "us",
      "color": "Pink",
      "style": "Outdoors top",
      "care_instructions": "Machine Wash"
    },
    "_id": "5de6ed3187d4b33c1a885ac9",
    "image": "pink_design_1.png",
    "title": "Pink Top",
    "description": "Pink Polyester top",
    "gender": "male",
    "age_group": "adult",
    "is_deleted": false
  }
}
```