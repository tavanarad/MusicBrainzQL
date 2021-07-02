# MusicBrainz QL

## How to run

1. Run [GraphBrainz](https://github.com/exogen/graphbrainz) server on your local machine with port `8080` or change the endpoint in the [configs.js](src/configs.js) file.
2. Install the dependencies by executing `npm ci`.
3. Run the server `npm run`

## Q&A

1. The CORS is disbaled in the project but you can enable it by changing the value of `FETCH_CORS_MODE` in the [cofigs.js](src/configs.js) file.
