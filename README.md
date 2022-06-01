# RESTful API Astronomy Pictures

RESTful API for the input of Astronomy pictures provided by [Astronomy Picture of the Day (APOD) microservice](https://github.com/nasa/apod-api/blob/master/README.md).



## Usage <a name="usage"></a>

Run `npx nodemon index.js`

## Documentation <a name="documentation"></a>

### HTTP methods <a name="http-methods"></a>

- GET - Takes several optional URL search params or the id of a picture.
- POST - Takes a body in the JSON format to create a picture.
- PATCH - Takes a body in the JSON format to update a picture and its id.
- DELETE - Takes a picture id to delete it.

### Endpoints <a name="endpoints"></a>

- GET - `/pictures`
- GET - `/pictures/{pictureId}`
- POST - `/pictures`
- PATCH - `/pictures/{pictureId}`
- DELETE - `/pictures/{pictureId}`

#### URL Search Params for GET method

These params are used to paginate and filter the result.

- `limit` Number of rows per page (10 by default). 
- `page` Page to return (1 by default).

**Returned fields**

- `id` Id if of the image.
- `title` The title of the image.
- `url` The URL of the APOD image or video of the day.
- `hdurl` The URL for any high-resolution image.
- `explanation` The supplied text explanation of the image.

All these fields (except the id) are needed at the moment of the creation of an image.

**Examples**

```bash
localhost:5000/pictures?limit=15&page=1
```


## Author <a name="author"></a>
- Shirley Tatiana Galvis - [STG](https://github.com/chirlytg)
