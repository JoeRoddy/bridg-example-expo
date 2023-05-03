# Bridg - Serverless create-react-app + Netlify

This repo is an example of Bridg being used in a serverless capacity, with a static client via create-react-app, and a single Netlify cloud function for handling requests from Bridg.

Note: This could be used with any cloud function provider, it doesn't necessarily need to be Netlify.

We just need a single function that can handle Bridg requests and to communicate with our database.

### Up and Running

Configure your database connection:

1. Set up a cloud DB (you can get a free Postgres DB at https://www.elephantsql.com/)
2. create a file named `.env` at the root of the project
3. Add your DB url:

```
DATABASE_URL="postgres://username:pass@host:port/dbname"
```

Startup

1. `npm install`
2. `npm run dev`
