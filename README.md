# JumpCut Assessment

This is the React/Redux portion of the JC assessment. This project completes the following:

* Simple page to type in a category into a search field
* Retrieves the list of words from the API asynchronously
* Store these into the state in Redux
* Search, and search results are stored into local storage (so they will persist after refresh)

BONUS:
* Ability to clear the storage / state.
* Upon clicking a word from the search results, search the definition via the API, display the info.

## Note

To run this project, you will need a `config.js` file placed into the src directory. Ideally, the API keys should be stored and used server-side. Once you have this file, to run locally:
1. Clone the repo
2. Place the `config.js` file into the `src` directory
3. Run `npm install`
4. Run `npm start`
5. Visit `localhost:3000`

  * Other Notes
  1. There was a CORS issue hitting the Dictionary API. This was resolved with a proxy.
  2. Bootstrap was used for most of the styling. CSS was also used secondarily.

## Libraries Used

* [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap) (For styling).
* [Redux](https://github.com/reactjs/redux) (State management).
* [Redux-Logger](https://github.com/evgenyrodionov/redux-logger) (Redux debugging).
* [Redux-Persist](https://github.com/rt2zz/redux-persist) (State persistence).
* [Redux-Thunk](https://github.com/gaearon/redux-thunk) (Middleware).
