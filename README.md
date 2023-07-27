## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run server`

Run a json-server in `localhost:3003` to provide the favorite data.

## Step by step to run the project

1. Clone the repository to your machine.

2. Enter the project directory.

3. Run `npm install` to install project dependencies.

4. In file `src/server/utils.ts` set `OMDB_API_KEY` to your api key(use `https://www.omdbapi.com/` to generate your api key).

5. Run `npm run server` to run the favorite server in `localhost:3003`.

6. In other terminal window run `npm start` to run the aplication in `localhost:3000`.
